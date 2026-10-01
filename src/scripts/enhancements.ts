const preferenceKey = 'portfolio-motion';

/** Progressive enhancement only: the rendered document is fully usable alone. */
export function enhancePortfolio() {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const wide = matchMedia('(min-width: 900px)');
  const lifecycle = new AbortController();
  const { signal } = lifecycle;
  const marks = [...document.querySelectorAll<HTMLElement>('[data-floating-logo]')];
  const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
  let preference: string | null = null;
  try { preference = localStorage.getItem(preferenceKey); } catch { /* Private storage may be unavailable. */ }
  const enabled = () => preference === 'on' || (preference !== 'off' && !reduced.matches);
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.toggleAttribute('data-visible', entry.isIntersecting);
  }) : null;

  function sync() {
    const on = enabled();
    root.dataset.motion = on && wide.matches && !document.hidden ? 'on' : 'off';
    observer?.disconnect();
    for (const mark of marks) {
      mark.removeAttribute('data-visible');
      if (root.dataset.motion === 'on') observer?.observe(mark);
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(on));
      toggle.querySelector('[data-motion-label]')!.textContent = on ? 'Motion on' : 'Motion off';
      toggle.hidden = false;
    }
  }
  toggle?.addEventListener('click', () => {
    preference = enabled() ? 'off' : 'on';
    try { localStorage.setItem(preferenceKey, preference); } catch { /* Keep the choice for this page. */ }
    sync();
  }, { signal });
  reduced.addEventListener('change', sync, { signal });
  wide.addEventListener('change', sync, { signal });
  document.addEventListener('visibilitychange', sync, { signal });
  window.addEventListener('storage', event => {
    if (event.key === preferenceKey || event.key === null) { preference = event.newValue; sync(); }
  }, { signal });
  sync();

  for (const contact of document.querySelectorAll<HTMLElement>('[data-email-contact]')) {
    const button = contact.querySelector<HTMLButtonElement>('[data-copy-email]')!;
    const status = contact.querySelector<HTMLElement>('[data-copy-status]')!;
    button.hidden = false;
    button.disabled = false;
    button.addEventListener('click', async () => {
      if (button.disabled) return;
      button.disabled = true;
      status.textContent = '';
      const address = contact.querySelector('.email-address')!.textContent!.trim()
        .replace(/\s*\[at\]\s*/, '@').replace(/\s*\[dot\]\s*/g, '.');
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(address);
        if (!signal.aborted) status.textContent = 'Email copied.';
      } catch {
        if (!signal.aborted) status.textContent = 'Couldn’t copy. Use the address above, replacing [at] with @ and [dot] with a dot.';
      } finally {
        if (!signal.aborted) button.disabled = false;
      }
    }, { signal });
  }
  return () => {
    lifecycle.abort();
    observer?.disconnect();
    root.dataset.motion = 'off';
    for (const mark of marks) mark.removeAttribute('data-visible');
  };
}
