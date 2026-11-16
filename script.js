(() => {
  document.documentElement.classList.add('has-js');
  // Content stays visible if the animation library cannot load.
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const cleanup = [];
    // Authored line breaks remain intentional; screen readers retain the heading.
    document.querySelectorAll('h1, h2').forEach(heading => {
      if (!heading.querySelector('.reveal-line')) {
        const original = heading.innerHTML;
        const lines = original.split(/<br\s*\/?\s*>/i);
        heading.innerHTML = lines.map(line => `<span class="line-clip"><span class="reveal-line">${line}</span></span>`).join('');
        cleanup.push(() => { heading.innerHTML = original; });
      }
      gsap.from(heading.querySelectorAll('.reveal-line'), {
        yPercent: 110, duration: .85, stagger: .075, ease: 'power3.out',
        scrollTrigger: { trigger: heading, start: 'top 92%', once: true },
        clearProps: 'transform'
      });
    });
    document.querySelectorAll('.copy-column, .take-home-copy, .conversation-copy').forEach(group => {
      gsap.from(group.children, {
        y: 18, opacity: 0, duration: .7, stagger: .085, ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 93%', once: true },
        clearProps: 'transform,opacity'
      });
    });
    document.querySelectorAll('.artwork, .packaging-photo, .shirt-photo, .tray-photo').forEach(art => {
      gsap.from(art, {
        y: 32, opacity: 0, clipPath: 'inset(0% 0% 22% 0%)',
        duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: art, start: 'top 92%', once: true },
        clearProps: 'transform,opacity,clipPath'
      });
    });
    const card = document.querySelector('.brew-card');
    if (card) gsap.from(card, {
      y: 30, rotation: 0, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.brew-card-stage', start: 'top 85%', once: true },
      clearProps: 'transform,opacity'
    });
    const endMark = document.querySelector('.end-mark .brand-mark');
    if (endMark) gsap.from(endMark, {
      y: 35, opacity: 0, duration: .95, ease: 'power3.out',
      scrollTrigger: { trigger: endMark, start: 'top 95%', once: true },
      clearProps: 'transform,opacity'
    });
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => cleanup.forEach(reset => reset());
  });
})();
