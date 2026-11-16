const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const source = fs.readFileSync('hero-motion.js', 'utf8');
async function fixture(reduce = false) {
  const listeners = {}, frames = new Map(), timers = new Map(); let serial = 0, clock = 0, observer;
  const element = () => ({style:{},attrs:{},hidden:true,textContent:'',addEventListener(n,f){this[n]=f;},setAttribute(n,v){this.attrs[n]=v;}});
  const nodes = Object.fromEntries(['hero-motion','coffee-photo','hero-photo','hero-mark','hero-toggle','hero-motion-status'].map(id=>[id,element()]));
  const overlay = element(), controls = element(), media={matches:reduce,addEventListener(n,f){this[n]=f;}};
  nodes['hero-motion'].querySelector = () => overlay;
  nodes['coffee-photo'].decode = () => Promise.resolve();
  const document = {hidden:false,getElementById:id=>nodes[id],querySelector:()=>controls,addEventListener(n,f){listeners[n]=f;}};
  vm.runInNewContext(source,{document,window:{matchMedia:()=>media},IntersectionObserver:class{constructor(cb){observer=cb;}observe(){}},requestAnimationFrame:f=>{const id=++serial;frames.set(id,f);return id;},setTimeout:f=>{const id=++serial;timers.set(id,f);return id;},clearTimeout:id=>timers.delete(id)});
  await Promise.resolve(); await Promise.resolve();
  observer([{isIntersecting:true}]);
  const step = (count=1) => {for(let n=0;n<count;n++){clock+=16; const current=[...frames.values()];frames.clear();current.forEach(f=>f(clock));}};
  return {nodes,overlay,controls,media,document,frames,step,click:id=>nodes[id].click(),timers:()=>{const ts=[...timers.values()];timers.clear();ts.forEach(f=>f());},visibility:hide=>{document.hidden=hide;listeners.visibilitychange();},visible:value=>observer([{isIntersecting:value}])};
}
(async()=>{
  const t=await fixture();assert.equal(t.controls.hidden,false);assert.equal(t.overlay.style.opacity,'0');t.timers();t.step(200);assert.equal(t.overlay.style.opacity,'1');assert.match(t.nodes['hero-motion-status'].textContent,/original/);
  t.click('hero-photo');t.step(65);const halfway=Number(t.overlay.style.opacity);assert.ok(halfway>0&&halfway<1);t.click('hero-toggle');t.step(20);assert.equal(Number(t.overlay.style.opacity),halfway);t.click('hero-toggle');t.step(200);assert.equal(t.overlay.style.opacity,'0','resume preserves reverse direction');
  t.click('hero-mark');t.step(40);const before=Number(t.overlay.style.opacity);t.visibility(true);t.step(50);assert.equal(Number(t.overlay.style.opacity),before,'hidden tab must pause');t.visibility(false);t.step(200);assert.equal(t.overlay.style.opacity,'1');
  t.click('hero-photo');t.step(20);t.visible(false);t.step(2);const offscreen=t.overlay.style.opacity;t.step(50);assert.equal(t.overlay.style.opacity,offscreen);t.visible(true);t.step(200);assert.equal(t.overlay.style.opacity,'0');
  const r=await fixture(true);r.timers();r.step(200);assert.equal(r.overlay.style.opacity,'0','reduced motion has no autoplay');r.click('hero-mark');assert.equal(r.overlay.style.opacity,'1');r.click('hero-toggle');assert.equal(r.overlay.style.opacity,'0','manual replay is instant under reduced motion');assert.equal(r.frames.size,0);
  console.log('PASS: autoplay, endpoints, reverse pause/resume, tab visibility, offscreen suspension, reduced motion');
})().catch(e=>{console.error(e);process.exitCode=1;});
