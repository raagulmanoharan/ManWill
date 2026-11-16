(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function select(tab, focus = false) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (['ArrowRight','ArrowDown'].includes(event.key)) next=(index+1)%tabs.length;
      if (['ArrowLeft','ArrowUp'].includes(event.key)) next=(index-1+tabs.length)%tabs.length;
      if (event.key==='Home') next=0;
      if (event.key==='End') next=tabs.length-1;
      if(next!==undefined){event.preventDefault();select(tabs[next],true);}
    });
  });
  const list = document.querySelector('[role="tablist"]');
  if(list){const mq=matchMedia('(max-width:680px)');const orient=()=>list.setAttribute('aria-orientation',mq.matches?'horizontal':'vertical');orient();mq.addEventListener('change',orient);}
  document.getElementById('reply-button')?.addEventListener('click', async () => {
    const textarea = document.getElementById('reply-text'), status = document.getElementById('reply-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard not available');
      await navigator.clipboard.writeText(textarea.value);
      status.textContent = 'Copied. Send it to Raagul in your existing Instagram conversation.';
    } catch {
      document.getElementById('reply-fallback').hidden = false;
      textarea.focus();textarea.select();
      status.textContent = 'Copy the message below, then send it in your Instagram conversation.';
    }
  });
})();
