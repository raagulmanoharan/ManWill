"""Build a standalone review file, separate from approved images on the main proposal."""
from pathlib import Path
from base64 import b64encode
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[2]
previews = Path('/workspace/scratch/manwill-previews')

def data(path, mime):
    return f'data:{mime};base64,' + b64encode(path.read_bytes()).decode('ascii')

svg = ET.parse(root / 'assets/brand/manwill-hand-lettered-v2.svg').getroot()
path = svg.find('{http://www.w3.org/2000/svg}path').attrib['d']
template = (root / 'production/motion/review-template.html').read_text()
values = {
    '__FONT_DATA__': data(root / 'assets/inter-tight-latin.woff2', 'font/woff2'),
    '__COFFEE_DATA__': data(previews / 'craft/cover-coffee-pilot.webp', 'image/webp'),
    '__PRINT_DATA__': data(previews / 'print/discovery-tray-pilot-v2.webp', 'image/webp'),
    '__PRINT_VARIANT_DATA__': data(previews / 'print/discovery-tray-pilot-variant.webp', 'image/webp'),
    '__PEOPLE_DATA__': data(previews / 'hospitality/people-brewer-fresh-printed-preview.webp', 'image/webp'),
    '__MARK_PATH__': path,
    '__MOTION_SCRIPT__': (root / 'production/motion/transition.js').read_text(),
}
for key, value in values.items():
    template = template.replace(key, value)
output = previews / 'manwill-review.html'
output.write_text(template)
(root / 'production/review.html').write_text(template)
print(f'{output}: {output.stat().st_size} bytes')
