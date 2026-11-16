(() => {
  const stage = document.getElementById('hero-motion');
  if (!stage) return;
  const photo = stage.querySelector('img');
  const paper = stage.querySelector('.hero-paper');
  const ink = stage.querySelector('.hero-ink');
  const displacement = document.getElementById('coffee-displacement');
  const toggle = document.getElementById('hero-toggle');
  const photoButton = document.getElementById('hero-photo');
  const markButton = document.getElementById('hero-mark');
  const status = document.getElementById('hero-motion-status');
  if (!photo || !paper || !ink || !toggle) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let progress = 0, running = false, frame = null, interacted = false;
  const clamp = value => Math.min(1, Math.max(0, value));
  const ease = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
  function render(value) {
    progress = clamp(value);
    const form = ease((progress - .2) / .43);
    const settle = ease((progress - .66) / .24);
    paper.style.opacity = String(form);
    ink.style.opacity = String(settle);
    photo.style.opacity = String(1 - settle);
    photo.style.transform = `translateY(${-3 * form}%) scale(${1.02 + .07 * form})`;
    displacement.setAttribute('scale', String(18 * Math.sin(Math.PI * form) * (1 - settle)));
    photoButton.setAttribute('aria-pressed', String(progress === 0));
    markButton.setAttribute('aria-pressed', String(progress === 1));
    toggle.textContent = running ? 'Pause transition' : progress === 1 ? 'Back to coffee' : 'Play transition';
  }
  function pause() { cancelAnimationFrame(frame); running = false; render(progress); }
  function play() {
    pause();
    const from = progress, to = progress === 1 ? 0 : 1;
    const duration = 6200 * Math.abs(to - from), start = performance.now();
    running = true;
    render(progress);
    const tick = now => {
      const elapsed = clamp((now - start) / duration);
      render(from + (to - from) * elapsed);
      if (elapsed < 1) frame = requestAnimationFrame(tick);
      else { running = false; render(to); status.textContent = to ? 'Manwill wordmark.' : 'Coffee photograph.'; }
    };
    frame = requestAnimationFrame(tick);
  }
  toggle.addEventListener('click', () => { interacted = true; running ? pause() : play(); });
  photoButton.addEventListener('click', () => { interacted = true; pause(); render(0); status.textContent = 'Coffee photograph.'; });
  markButton.addEventListener('click', () => { interacted = true; pause(); render(1); status.textContent = 'Manwill wordmark.'; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  reduced.addEventListener('change', event => { if (event.matches) { pause(); render(1); } });
  new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }, {threshold:0}).observe(stage);
  function fitLayers() {
    const {width, height} = stage.getBoundingClientRect();
    const markWidth = Math.min(width * .84, height * .8 * 1444 / 476);
    const markHeight = markWidth * 476 / 1444;
    for (const layer of [paper, ink]) {
      layer.setAttribute('viewBox', `0 0 ${width} ${height}`);
      const mark = layer.querySelector('svg');
      mark.setAttribute('x', String((width - markWidth) / 2));
      mark.setAttribute('y', String((height - markHeight) / 2));
      mark.setAttribute('width', String(markWidth));
      mark.setAttribute('height', String(markHeight));
    }
  }
  new ResizeObserver(fitLayers).observe(stage);
  fitLayers();
  document.querySelector('.hero-controls').hidden = false;
  render(reduced.matches ? 1 : 0);
  photo.decode().catch(() => {}).then(() => { if (!reduced.matches && !document.hidden && !interacted) play(); });
})();
