(() => {
  const photo = document.getElementById('scene-photo');
  const paper = document.getElementById('paper-layer');
  const ink = document.getElementById('ink-layer');
  const displacement = document.getElementById('edge-displacement');
  const button = document.getElementById('toggle-motion');
  const slider = document.getElementById('motion-position');
  const phase = document.getElementById('motion-phase');
  const status = document.getElementById('motion-status');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let progress = 0;
  let running = false;
  let frame = null;
  const clamp = value => Math.min(1, Math.max(0, value));
  const ease = value => { const t = clamp(value); return t * t * (3 - 2 * t); };

  function render(value) {
    progress = clamp(value);
    const form = ease((progress - .2) / .43);
    const settle = ease((progress - .66) / .24);
    paper.style.opacity = String(form);
    ink.style.opacity = String(settle);
    photo.style.transform = `translateY(${-3 * form}%) scale(${1.02 + .07 * form})`;
    displacement.setAttribute('scale', String(18 * Math.sin(Math.PI * form) * (1 - settle)));
    slider.value = String(Math.round(progress * 100));
    phase.textContent = progress < .3 ? 'Coffee image' : progress < .8 ? 'Coffee into type' : 'Supplied wordmark';
    if (!running) button.textContent = progress >= .999 ? 'Back to image' : 'Play transition';
  }

  function pause() {
    cancelAnimationFrame(frame);
    running = false;
    render(progress);
  }

  function play() {
    pause();
    const from = progress;
    const to = progress >= .999 ? 0 : 1;
    const duration = 6200 * Math.abs(to - from);
    const start = performance.now();
    running = true;
    button.textContent = 'Pause';
    status.textContent = to ? 'Playing image to wordmark.' : 'Playing wordmark to image.';
    const tick = now => {
      const elapsed = clamp((now - start) / duration);
      render(from + (to - from) * elapsed);
      if (elapsed < 1) frame = requestAnimationFrame(tick);
      else {
        running = false;
        render(to);
        status.textContent = to ? 'Showing the supplied wordmark.' : 'Showing the coffee image.';
      }
    };
    frame = requestAnimationFrame(tick);
  }

  button.addEventListener('click', () => running ? pause() : play());
  slider.addEventListener('input', () => { const value = Number(slider.value) / 100; pause(); render(value); });
  document.getElementById('show-photo').addEventListener('click', () => { pause(); render(0); status.textContent = 'Showing the coffee image.'; });
  document.getElementById('show-logo').addEventListener('click', () => { pause(); render(1); status.textContent = 'Showing the supplied wordmark.'; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  reduced.addEventListener('change', event => { if (event.matches) { pause(); render(1); } });
  render(reduced.matches ? 1 : 0);
  photo.decode().catch(() => {}).then(() => { if (!reduced.matches && !document.hidden) play(); });
})();
