"""Insert the authorized production artwork into the static build."""
from pathlib import Path
import html
import json
import re
import shutil

FIGURE = re.compile(r'<figure\b(?P<attrs>[^>]*\bdata-visual="(?P<id>[^"]+)"[^>]*)>.*?</figure>', re.S)


def build_visuals(root):
    root = Path(root).resolve()
    entries = json.loads((root / 'production/visual-slots.json').read_text())['slots']
    slots = {entry['id']: entry for entry in entries}
    if len(slots) != len(entries):
        raise ValueError('Duplicate visual slot ID')
    seen = set()

    def render(match, page):
        key = match['id']
        if key in seen or key not in slots:
            raise ValueError(f'Duplicate or unknown page slot: {key}')
        seen.add(key)
        entry = slots[key]
        if entry['page'] != page:
            raise ValueError(f'Wrong page for {key}')
        if entry.get('approved') is not True:
            raise ValueError(f'Production artwork is not ready: {key}')
        src = entry.get('src')
        if not src or not entry.get('alt', '').strip():
            raise ValueError(f'Approved slot needs a file and alt text: {key}')
        if not isinstance(src, str) or Path(src).parts[:2] != ('assets', 'visuals') or '..' in Path(src).parts:
            raise ValueError(f'Image path must be under assets/visuals: {key}')
        source = (root / src).resolve()
        relative = source.relative_to((root / 'assets/visuals').resolve())
        if not source.is_file() or source.suffix.lower() not in {'.jpg', '.jpeg', '.webp', '.png', '.avif'}:
            raise ValueError(f'Approved image is missing or unsupported: {key}')
        width, height = entry['width'], entry['height']
        if type(width) is not int or type(height) is not int or min(width, height) <= 0:
            raise ValueError(f'Invalid image dimensions: {key}')
        destination = root / 'dist/assets/visuals' / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
        attrs = re.sub(r'\saria-label="[^"]*"', '', match['attrs'])
        attrs = re.sub(r'class="([^"]*)"', r'class="\1 has-image"', attrs, count=1)
        loading = 'loading="eager" fetchpriority="high"' if key == 'cover-coffee' else 'loading="lazy"'
        image = f'<img src="{html.escape(src, quote=True)}" alt="{html.escape(entry["alt"], quote=True)}" width="{width}" height="{height}" {loading} decoding="async">'
        return f'<figure{attrs}>{image}</figure>'

    for page in ('index.html', 'research.html'):
        target = root / 'dist' / page
        target.write_text(FIGURE.sub(lambda match: render(match, page), target.read_text()))
    if seen != slots.keys():
        raise ValueError(f'Slots missing from pages: {sorted(slots.keys() - seen)}')
    print(f'Visuals: {len(seen)} slots, {sum(e.get("approved") is True for e in entries)} approved images')


if __name__ == '__main__':
    build_visuals(Path(__file__).resolve().parents[1])
