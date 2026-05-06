import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {

  // ── Hero: timeline de entrada al cargar la página ──────────────
  // gsap.from() en el hero está bien porque está above-the-fold:
  // los elementos arrancan invisibles y se revelan inmediatamente.
  gsap.timeline({ defaults: { ease: 'power2.out' } })
    .from('[data-hero-badge]', { opacity: 0, y: 16, duration: 0.5 }, 0.15)
    .from('[data-hero-title]', { opacity: 0, y: 32, duration: 0.7 }, 0.30)
    .from('[data-hero-sub]',   { opacity: 0, y: 20, duration: 0.6 }, 0.50)
    .from('[data-hero-ctas]',  { opacity: 0, y: 16, duration: 0.5 }, 0.65);

  // ── Fade-up en secciones ───────────────────────────────────────
  // Usamos onEnter en vez de gsap.from() directo para evitar que
  // los elementos queden en opacity:0 si el trigger no dispara.
  gsap.utils.toArray<HTMLElement>('[data-scroll-fade]').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        });
      },
    });
  });

  // ── Stagger en grids (cards y stack items) ─────────────────────
  // Misma razón: onEnter evita que todos los items queden invisibles
  // al cargar si el threshold no se alcanza en ese momento.
  gsap.utils.toArray<HTMLElement>('[data-scroll-stagger]').forEach(container => {
    const items = container.querySelectorAll<HTMLElement>('[data-stagger-item]');
    if (!items.length) return;

    ScrollTrigger.create({
      trigger: container,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.from(items, {
          opacity: 0,
          y: 24,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        });
      },
    });
  });

  // Recalcula posiciones después de que el DOM está completamente pintado
  ScrollTrigger.refresh();
}
