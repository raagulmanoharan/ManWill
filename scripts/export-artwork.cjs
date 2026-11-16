// Render editable HTML compositions into complete, uncropped website artwork.
// Set PLAYWRIGHT_MODULE and CHROMIUM_PATH when those are not on the default path.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const url = process.env.ARTWORK_URL || 'http://127.0.0.1:8001/review.html';
const out = path.join(root, 'shots/artwork');
fs.mkdirSync(out, {recursive:true});

(async () => {
  const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH || undefined, headless:true});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    await page.goto(url, {waitUntil:'load'});
    await page.evaluate(() => document.fonts.ready);
    const head = await page.locator('head').innerHTML();
    const source = fs.readFileSync(path.join(root,'assets/brand/manwill-hand-lettered-v2.svg'),'utf8').match(/ d="([^"]+)"/)[1];
    const artwork = await page.locator('[data-round-visual], [data-final-visual]').evaluateAll(els => els.map(el => {
      const final = !!el.dataset.finalVisual;
      const id = el.dataset.finalVisual || el.dataset.roundVisual;
      const dimensions = {'handwritten-poster':[1086,1448], 'landscape-poster':[1536,1024], 'compare-technical':[1122,1402], 'compare-lifestyle':[1122,1402]};
      const [width,height] = final ? dimensions[id] : [Number(el.querySelector('img').getAttribute('width')),Number(el.querySelector('img').getAttribute('height'))];
      return {id,width,height,html:el.outerHTML,wrapper:el.closest('section').className};
    }));
    assert.equal(artwork.length,9);
    await page.close();
    for (const art of artwork.filter(art => !process.argv[2] || art.id === process.argv[2])) {
      assert.ok(art.width > 0 && art.height > 0, 'Artwork needs native dimensions');
      const frame = await browser.newPage({viewport:{width:art.width,height:art.height},deviceScaleFactor:1,reducedMotion:'reduce'});
      await frame.setContent(`<!doctype html><html lang="en"><head>${head}<style>html,body{margin:0;padding:0}.round-two,.final-art,.hospitality-art,.discovery-art,.coffee-art{width:100%;max-width:none;margin:0;padding:0}figure{width:100%!important;max-width:none!important}</style></head><body><div class="${art.wrapper}">${art.html}</div></body></html>`);
      await frame.evaluate(() => document.fonts.ready);
      await frame.locator('img').evaluate(el => el.decode());
      const marks = await frame.locator('svg path').evaluateAll(paths => paths.map(p => p.getAttribute('d')));
      for (const mark of marks) assert.equal(mark, source, art.id+' changed supplied path');
      const png = path.join(out,art.id+'.png');
      await frame.locator('figure').screenshot({path:png});
      const actual = execFileSync('magick',['identify','-format','%w %h',png], {encoding:'utf8'}).trim();
      assert.equal(actual, `${art.width} ${art.height}`, art.id + ' export dimensions');
      execFileSync('magick',[png,'-quality','92',path.join(root,'assets/visuals',art.id+'.webp')]);
      console.log(`${art.id}: ${art.width} × ${art.height}, ${marks.length ? 'exact SVG' : 'photo-only'}, complete artwork`);
      await frame.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
