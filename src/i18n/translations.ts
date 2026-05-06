export type Lang = 'es' | 'en'

export const ui = {
  es: {
    meta: {
      title: 'Leandro Fernandez — Landing Page Developer',
      description: 'Full-Stack Developer especializado en UI, performance y SEO técnico. Buenos Aires, Argentina.',
    },
    nav: {
      items: [
        { label: 'Proyectos',   href: '#projects'   },
        { label: 'Experiencia', href: '#experience'  },
        { label: 'Stack',       href: '#stack'       },
        { label: 'Contacto',    href: '#contact'     },
      ],
    },
    hero: {
      badge:        'Disponible para nuevos proyectos',
      headline:     'Desarrollo landing pages que convierten.',
      sub:          'Full-Stack Developer especializado en UI, performance y SEO técnico. Buenos Aires, Argentina.',
      ctaPrimary:   'Ver proyectos',
      ctaSecondary: 'Contactar',
    },
    projects: {
      heading:   'Proyectos',
      sub:       'Proyectos reales en producción con contexto de negocio y métricas de performance.',
      viewCase:  'Ver caso',
      closeCase: 'Cerrar caso',
      viewSite:  'Ver sitio',
      types: {
        'landing-saas':      'Landing SaaS',
        'landing-marketing': 'Landing Marketing',
        'sitio-web':         'Sitio Web',
        'landing-practica':  'Landing de Práctica',
      } as Record<string, string>,
    },
    caseStudy: {
      label:   'Caso de estudio',
      context: 'Contexto',
      role:    'Mi rol',
      stack:   'Stack técnico',
      results: 'Resultados',
      client:  'Cliente',
    },
    experience: {
      heading: 'Experiencia',
      sub:     'Empresas y proyectos donde apliqué mis habilidades técnicas.',
    },
    stack: {
      heading: 'Stack',
      sub:     'Tecnologías con las que construyo productos web de alta performance.',
      levels:  { 1: 'básico', 2: 'intermedio', 3: 'avanzado' } as Record<number, string>,
    },
    contact: {
      heading: '¿Tenés un proyecto?',
      sub:     'Hablemos. Estoy disponible para proyectos freelance, trabajo remoto y nuevas oportunidades.',
      copy:    'Copiar',
      copied:  '¡Copiado!',
    },
    footer: {
      madeWith: 'Hecho con Astro y Tailwind CSS',
    },
  },

  en: {
    meta: {
      title: 'Leandro Fernandez — Landing Page Developer',
      description: 'Full-Stack Developer specializing in UI, performance and technical SEO. Buenos Aires, Argentina.',
    },
    nav: {
      items: [
        { label: 'Projects',   href: '#projects'   },
        { label: 'Experience', href: '#experience'  },
        { label: 'Stack',      href: '#stack'       },
        { label: 'Contact',    href: '#contact'     },
      ],
    },
    hero: {
      badge:        'Available for new projects',
      headline:     'I build landing pages that convert.',
      sub:          'Full-Stack Developer specializing in UI, performance and technical SEO. Buenos Aires, Argentina.',
      ctaPrimary:   'View projects',
      ctaSecondary: 'Contact',
    },
    projects: {
      heading:   'Projects',
      sub:       'Real production projects with business context and performance metrics.',
      viewCase:  'View case',
      closeCase: 'Close case',
      viewSite:  'View site',
      types: {
        'landing-saas':      'SaaS Landing',
        'landing-marketing': 'Marketing Landing',
        'sitio-web':         'Website',
        'landing-practica':  'Practice Landing',
      } as Record<string, string>,
    },
    caseStudy: {
      label:   'Case study',
      context: 'Context',
      role:    'My role',
      stack:   'Tech stack',
      results: 'Results',
      client:  'Client',
    },
    experience: {
      heading: 'Experience',
      sub:     'Companies and projects where I applied my technical skills.',
    },
    stack: {
      heading: 'Stack',
      sub:     'Technologies I use to build high-performance web products.',
      levels:  { 1: 'basic', 2: 'intermediate', 3: 'advanced' } as Record<number, string>,
    },
    contact: {
      heading: 'Got a project?',
      sub:     "Let's talk. I'm available for freelance projects, remote work and new opportunities.",
      copy:    'Copy',
      copied:  'Copied!',
    },
    footer: {
      madeWith: 'Built with Astro and Tailwind CSS',
    },
  },
} as const

export type UI = typeof ui['es']
