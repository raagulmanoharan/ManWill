"""Give changed local assets fresh URLs after GitHub Pages publication."""
from hashlib import sha256
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1] / 'dist'

def version(url, base):
    if url.startswith(('data:', 'http:', 'https:', '#', '//')):
        return url
    file = (base / url.split('?')[0]).resolve()
    if not file.is_relative_to(root) or not file.is_file() or file.suffix == '.html':
        return url
    return url.split('?')[0] + '?v=' + sha256(file.read_bytes()).hexdigest()[:12]

# Font URLs change before calculating the stylesheet's own content hash.
for file in root.glob('*.css'):
    text = file.read_text()
    text = re.sub(r"url\((['\"]?)([^)'\"]+)\1\)", lambda m: f'url({m[1]}{version(m[2], file.parent)}{m[1]})', text)
    file.write_text(text)

for file in root.glob('*.html'):
    text = file.read_text()
    text = re.sub(r'\b(src|href)="([^"]+)"', lambda m: f'{m[1]}="{version(m[2], file.parent)}"', text)
    file.write_text(text)
print('Versioned local fonts, styles, scripts and images')
