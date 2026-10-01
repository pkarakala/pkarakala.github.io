/** A pointer nudges nearby fragments; the CSS cycle continues underneath. */
export function enhanceLogoPointer(marks: HTMLElement[], root: HTMLElement, signal: AbortSignal) {
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const fields = marks.map(mark => ({
    mark,
    svg: mark.querySelector<SVGSVGElement>('.logo-assembly')!,
    nodes: [...mark.querySelectorAll<SVGGElement>('.logo-atom')].map(atom => ({
      atom,
      fragment: atom.querySelector<SVGGElement>('.logo-fragment')!,
    })),
  }));
  let active: typeof fields[number] | undefined;
  let frame = 0;
  let pointer: { x: number; y: number } | null = null;

  function release() {
    if (!active) return;
    active.mark.removeAttribute('data-pointer-near');
    for (const { fragment } of active.nodes) {
      fragment.style.removeProperty('--pointer-x');
      fragment.style.removeProperty('--pointer-y');
    }
    active = undefined;
  }

  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    pointer = null;
    release();
  }

  function respond() {
    frame = 0;
    if (!pointer || root.dataset.motion !== 'on' || !fine.matches) return reset();
    const field = fields.find(({ mark, svg }) => {
      if (!mark.hasAttribute('data-visible')) return false;
      const box = svg.getBoundingClientRect();
      return pointer!.x >= box.left && pointer!.x <= box.right && pointer!.y >= box.top && pointer!.y <= box.bottom;
    });
    if (field !== active) { release(); active = field; }
    if (!field) return;
    const screen = field.svg.getScreenCTM();
    if (!screen) return reset();
    const point = new DOMPoint(pointer.x, pointer.y).matrixTransform(screen.inverse());
    // Read every position before writing styles, so a pointer event causes one layout read.
    const offsets = field.nodes.map(({ atom, fragment }, index) => {
      const matrix = new DOMMatrixReadOnly(getComputedStyle(atom).transform);
      let dx = matrix.e - point.x;
      let dy = matrix.f - point.y;
      const distance = Math.hypot(dx, dy);
      const force = 70 * Math.max(0, 1 - distance / 110) ** 2;
      if (distance < 1) { dx = Math.cos(index * 2.4); dy = Math.sin(index * 2.4); }
      const norm = Math.hypot(dx, dy) || 1;
      const x = Math.min(634, Math.max(26, matrix.e + dx / norm * force)) - matrix.e;
      const y = Math.min(374, Math.max(26, matrix.f + dy / norm * force)) - matrix.f;
      // The atom can rotate during its journey. Convert the nudge to its local axes.
      return { fragment, x: matrix.a * x + matrix.b * y, y: matrix.c * x + matrix.d * y };
    });
    field.mark.setAttribute('data-pointer-near', '');
    for (const { fragment, x, y } of offsets) {
      fragment.style.setProperty('--pointer-x', `${x.toFixed(2)}px`);
      fragment.style.setProperty('--pointer-y', `${y.toFixed(2)}px`);
    }
  }

  window.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || root.dataset.motion !== 'on' || !fine.matches) return;
    pointer = { x: event.clientX, y: event.clientY };
    if (!frame) frame = requestAnimationFrame(respond);
  }, { signal, passive: true });
  document.addEventListener('pointerleave', reset, { signal });
  document.addEventListener('scroll', reset, { signal, passive: true, capture: true });
  window.addEventListener('blur', reset, { signal });
  fine.addEventListener('change', reset, { signal });
  signal.addEventListener('abort', reset, { once: true });
  return reset;
}
