(() => {
  'use strict';
  const button = document.getElementById('reply-button');
  const textarea = document.getElementById('reply-text');
  const status = document.getElementById('reply-status');
  const fallback = document.getElementById('reply-fallback');
  if (!button || !textarea || !status || !fallback) return;
  button.addEventListener('click', async () => {
    if (button.getAttribute('aria-busy') === 'true') return;
    button.setAttribute('aria-busy', 'true');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(textarea.value);
      status.textContent = 'Reply copied. Paste it into our Instagram conversation.';
    } catch {
      fallback.hidden = false;
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      status.textContent = 'Copy the selected message below, then paste it into our Instagram conversation.';
    } finally {
      button.removeAttribute('aria-busy');
    }
  });
})();
