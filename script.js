(() => {
  const button = document.getElementById('reply-button');
  if (!button) return;
  button.addEventListener('click', async () => {
    const textarea = document.getElementById('reply-text');
    const status = document.getElementById('reply-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(textarea.value);
      status.textContent = 'Copied. Send it to Raagul in our existing Instagram conversation.';
    } catch {
      document.getElementById('reply-fallback').hidden = false;
      textarea.focus();
      textarea.select();
      status.textContent = 'Copy the message below, then send it in our Instagram conversation.';
    }
  });
})();
