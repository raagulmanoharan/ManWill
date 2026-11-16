"""Build the artwork workbook from repository-owned source images."""
from pathlib import Path
from base64 import b64encode
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[2]
previews = root / 'production/photos'

def data(path, mime):
    return f'data:{mime};base64,' + b64encode(path.read_bytes()).decode('ascii')

svg = ET.parse(root / 'assets/brand/manwill-hand-lettered-v2.svg').getroot()
path = svg.find('{http://www.w3.org/2000/svg}path').attrib['d']
template = (root / 'production/motion/review-template.html').read_text()
components = ['hospitality-art', 'discovery-art', 'coffee-art', 'final-art']
template = template.replace('__ARTWORK_STYLES__', '\n'.join((root / 'production' / name / 'styles.css').read_text() for name in components))
template = template.replace('__ARTWORK_SECTIONS__', '\n'.join((root / 'production' / name / 'section.html').read_text() for name in components))
values = {
    '__FONT_DATA__': data(root / 'assets/inter-tight-latin.woff2', 'font/woff2'),
    '__COFFEE_DATA__': data(root / 'assets/visuals/cover-coffee.webp', 'image/webp'),
    '__PRINT_DATA__': data(root / 'assets/visuals/discovery-tray.webp', 'image/webp'),
    '__PRINT_VARIANT_DATA__': data(previews / 'discovery-tray-alternative.webp', 'image/webp'),
    '__PEOPLE_DATA__': data(root / 'assets/visuals/people-brewer.webp', 'image/webp'),
    '__CANDID_DATA__': data(previews / 'people-candid.webp', 'image/webp'),
    '__SOCIAL_DATA__': data(previews / 'people-social.webp', 'image/webp'),
    '__POUR_DATA__': data(previews / 'craft-pour.webp', 'image/webp'),
    '__COUNTER_DATA__': data(previews / 'craft-poster.webp', 'image/webp'),
    '__MENU_DATA__': data(previews / 'discovery-menu.webp', 'image/webp'),
    '__DISCOVERY_DETAIL_DATA__': data(previews / 'discovery-detail.webp', 'image/webp'),
    '__ENCOUNTER_DATA__': data(previews / 'counter-encounter.webp', 'image/webp'),
    '__MARK_PATH__': path,
    '__MOTION_SCRIPT__': (root / 'production/motion/transition.js').read_text(),
}
for key, value in values.items():
    template = template.replace(key, value)
output = root / 'production/review.html'
output.write_text(template)

print(f'{output}: {output.stat().st_size} bytes')
