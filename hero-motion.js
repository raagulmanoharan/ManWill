(() => {
  const stage = document.getElementById('hero-motion');
  if (!stage) return;
  const photo = document.getElementById('coffee-photo');
  const finalFrame = stage.querySelector('.hero-final');
  const controls = document.querySelector('.hero-controls');
  const photoButton = document.getElementById('hero-photo');
  const markButton = document.getElementById('hero-mark');
  const toggle = document.getElementById('hero-toggle');
  const status = document.getElementById('hero-motion-status');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let progress = 0, target = 1, running = false, visible = false, ready = false;
  let autoStarted = false, frame = 0, last = 0, autoTimer = 0;
  const duration = 2600;
  const canRun = () => visible && !document.hidden && ready;
  function paint() {
    const eased = progress * progress * (3 - 2 * progress);
    finalFrame.style.opacity = String(eased);
    photoButton.setAttribute('aria-pressed', String(progress === 0));
    markButton.setAttribute('aria-pressed', String(progress === 1));
    toggle.textContent = running ? 'Pause' : (progress > 0 && progress < 1 ? 'Continue' : 'Replay');
    toggle.setAttribute('aria-label', running ? 'Pause transition' : (progress > 0 && progress < 1 ? 'Continue transition' : 'Replay coffee to wordmark transition'));
  }
  function announce() {
    status.textContent = progress === 0 ? 'The coffee-lettering photograph is displayed.' : progress === 1 ? 'The original Manwill wordmark is displayed.' : 'The transition is paused.';
  }
  function tick(now) {
    frame = 0;
    if (!running || !canRun()) { last = 0; return; }
    if (last) {
      const step = Math.min(now - last, 80) / duration;
      progress = target === 1 ? Math.min(1, progress + step) : Math.max(0, progress - step);
    }
    last = now;
    if (progress === target) { running = false; last = 0; announce(); }
    paint();
    if (running) frame = requestAnimationFrame(tick);
  }
  function schedule() {
    if (running && canRun() && !frame) { last = 0; frame = requestAnimationFrame(tick); }
  }
  function cancelAutoplay() { autoStarted = true; clearTimeout(autoTimer); }
  function goTo(value) {
    cancelAutoplay(); target = value;
    if (reduced.matches) { progress = value; running = false; paint(); announce(); return; }
    running = progress !== target; paint(); schedule();
  }
  photoButton.addEventListener('click', () => goTo(0));
  markButton.addEventListener('click', () => goTo(1));
  toggle.addEventListener('click', () => {
    cancelAutoplay();
    if (reduced.matches) { progress = progress < 1 ? 1 : 0; target = progress; running = false; paint(); announce(); return; }
    if (running) { running = false; last = 0; paint(); announce(); return; }
    if (progress === 0 || progress === 1) { progress = 0; target = 1; }
    running = true; paint(); schedule();
  });
  function maybeAutoplay() {
    if (autoStarted || reduced.matches || !canRun()) return;
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => {
      if (!canRun() || reduced.matches) return;
      autoStarted = true; running = true; target = 1; paint(); schedule();
    }, 1500);
  }
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (!visible) { clearTimeout(autoTimer); last = 0; }
    else { maybeAutoplay(); schedule(); }
  }, { threshold: .25 });
  observer.observe(stage);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { clearTimeout(autoTimer); last = 0; }
    else { maybeAutoplay(); schedule(); }
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) { cancelAutoplay(); running = false; progress = progress >= .5 ? 1 : 0; paint(); announce(); }
  });
  photo.decode().then(() => { ready = true; controls.hidden = false; paint(); maybeAutoplay(); }).catch(() => {
    ready = true; progress = 1; finalFrame.style.opacity = '1'; status.textContent = 'The original Manwill wordmark is displayed.';
  });
})();
