from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re
root=Path('dist').resolve()
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.refs=[];self.ids=[];self.images=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  for key in ('src','href'):
   if key in a:self.refs.append(a[key])
  if tag=='img':self.images.append(a)
pages={p.name:Page(p.read_text()) for p in root.glob('*.html')}
assert set(pages)=={'index.html','research.html'}, 'Only production pages should be built'
for name,page in pages.items():
 assert len(page.ids)==len(set(page.ids)),f'Duplicate IDs: {name}'
 for a in page.images: assert 'alt' in a,f'Missing alt in {name}'
 for url in page.refs:
  u=urlsplit(url)
  if u.scheme or u.netloc:continue
  file=(root/unquote(u.path)).resolve() if u.path else root/name
  assert file.is_file(),f'Missing local target: {name}: {url}'
  if u.fragment and file.name in pages:assert u.fragment in pages[file.name].ids,f'Broken anchor: {url}'
for file in root.glob('*.css'):
 for _,url in re.findall(r'url\(([\'\"]?)([^)\'\"]+)\1\)',file.read_text()):
  if url.startswith(('data:', '#', '%23')):continue
  assert (root/url.split('?')[0]).is_file(),f'Missing CSS target {url}'
assert Path('assets/brand/manwill-hand-lettered-v2.svg').read_bytes()==(root/'assets/brand/manwill-hand-lettered-v2.svg').read_bytes()
assert (root/'assets/editorial/coffee-lettering-white.webp').read_bytes()==Path('assets/editorial/coffee-lettering-white.webp').read_bytes()
assert not (root/'review.html').exists()
home=(root/'index.html').read_text()
assert 'hero-motion' not in home and 'hero-final' not in home and 'hero-controls' not in home
assert not (root/'hero-motion.js').exists()
assert 'brewing-editorial.webp' in home and 'counter.webp' not in home
assert 'illustrative explorations' in home.lower() and 'Customer experience strategy' in home
print(f'PASS: {len(pages)} pages, local links and assets, alt text, static coffee hero, editorial replacement and proposal context')
