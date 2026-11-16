(() => {
  const button = document.getElementById('reply-button');
  if (!button) return;
  button.addEventListener('click', async () => {
    const textarea = document.getElementById('reply-text');
    const status = document.getElementById('reply-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(textarea.value);
      status.textContent = 'Copied. Paste it into the Instagram conversation.';
    } catch {
      document.getElementById('reply-fallback').hidden = false;
      textarea.focus();
      textarea.select();
      status.textContent = 'Select and copy the message below, then paste it into the Instagram conversation.';
    }
  });
})();
