import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {

  // Hero — staggered entrance al cargar la página
  gsap.timeline({ defaults: { ease: 'power2.out' } })
    .from('[data-hero-badge]', { opacity: 0, y: 16, duration: 0.5 }, 0.15)
    .from('[data-hero-title]', { opacity: 0, y: 32, duration: 0.7 }, 0.30)
    .from('[data-hero-sub]',   { opacity: 0, y: 20, duration: 0.6 }, 0.50)
    .from('[data-hero-ctas]',  { opacity: 0, y: 16, duration: 0.5 }, 0.65);

  // Scroll fade-up — headings y bloques de contenido
  gsap.utils.toArray<HTMLElement>('[data-scroll-fade]').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 28,
      duration: 0.65,
      ease: 'power2.out',
    });
  });

  // Scroll stagger — grids de project cards y stack items
  gsap.utils.toArray<HTMLElement>('[data-scroll-stagger]').forEach(container => {
    const items = container.querySelectorAll('[data-stagger-item]');
    if (!items.length) return;

    gsap.from(items, {
      scrollTrigger: {
        trigger: container,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 24,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power2.out',
    });
  });

}
