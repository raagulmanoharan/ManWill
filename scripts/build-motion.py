"""Add the original supplied wordmark to the coffee image transition."""
from pathlib import Path
import re
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[1]
svg = ET.parse(root / 'assets/brand/manwill-hand-lettered-v2.svg').getroot()
path = svg.find('{http://www.w3.org/2000/svg}path').attrib['d']
target = root / 'dist/index.html'
page = target.read_text()
pattern = re.compile(r'(<div\b[^>]*\bid="hero-motion"[^>]*>\s*<figure\b[^>]*data-visual="cover-coffee"[^>]*>.*?</figure>)(\s*</div>)', re.S)
if len(pattern.findall(page)) != 1:
    raise ValueError('Expected one hero-motion stage containing the cover figure')
layers = f'''
<svg class="hero-paper" viewBox="0 0 1600 1000" aria-hidden="true">
  <defs>
    <filter id="coffee-edge" x="-8%" y="-15%" width="116%" height="130%"><feTurbulence type="fractalNoise" baseFrequency=".009" numOctaves="2" seed="17" result="noise"/><feDisplacementMap id="coffee-displacement" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
    <mask id="coffee-cutout" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" style="mask-type:luminance"><rect width="100%" height="100%" fill="white"/><svg x="128" y="278.5" width="1344" height="443" viewBox="-18 -18 1444 476"><path d="{path}" fill="black" fill-rule="evenodd" filter="url(#coffee-edge)"/></svg></mask>
  </defs><rect width="100%" height="100%" fill="#f3f0e7" mask="url(#coffee-cutout)"/>
</svg>
<svg class="hero-ink" viewBox="0 0 1600 1000" aria-hidden="true"><svg x="128" y="278.5" width="1344" height="443" viewBox="-18 -18 1444 476"><path id="hero-wordmark" d="{path}" fill="#211c17" fill-rule="evenodd"/></svg></svg>'''
controls = '''
<div class="hero-controls page-width" aria-label="Coffee and wordmark animation" hidden>
  <button id="hero-toggle" type="button">Play transition</button>
  <div class="hero-states"><button id="hero-photo" type="button">Coffee</button><button id="hero-mark" type="button">Wordmark</button></div>
</div>
<p class="sr-only" id="hero-motion-status" role="status"></p>'''
page = pattern.sub(lambda m: m[1] + layers + m[2] + controls, page)
target.write_text(page)
print('Motion: supplied SVG path preserved in both layers')
