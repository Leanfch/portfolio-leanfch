export interface ExperienceItem {
  period: string
  role: { es: string; en: string }
  company: string
  companyUrl?: string
  description: { es: string[]; en: string[] }
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: 'Jul 2023 — Presente',
    role: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Developer',
    },
    company: 'Thinkion',
    description: {
      es: [
        'Diseñé y construí una plataforma CMS a medida desde cero para institución académica: relevamiento de requerimientos, especificaciones técnicas y desarrollo en PHP (MVC), MySQL y Firebase.',
        'Logré una mejora del 72% en PageSpeed (de 53 a 91 puntos) mediante optimización de assets, CDN, lazy loading y Memcached.',
        'Construí panel de administración con CRUD completo, gestión de roles y APIs JSON para integración con servicios externos usando HTMX y Tailwind CSS.',
        'Gestioné infraestructura de despliegue: Docker, CI/CD en Google Cloud Run, Apache.',
      ],
      en: [
        'Designed and built a custom CMS platform from scratch for an academic institution: requirements gathering, technical documentation, and development in PHP (MVC), MySQL and Firebase.',
        'Achieved a 72% PageSpeed improvement (from 53 to 91 points) through asset optimization, CDN, lazy loading and Memcached.',
        'Built an admin panel with full CRUD, user role management, and JSON APIs for external service integration using HTMX and Tailwind CSS.',
        'Managed deployment infrastructure: Docker, CI/CD on Google Cloud Run, Apache.',
      ],
    },
    tags: ['PHP (MVC)', 'MySQL', 'Firebase', 'HTMX', 'Tailwind CSS', 'Docker', 'CI/CD'],
  },
  {
    period: 'Mar 2024 — Presente',
    role: {
      es: 'Desarrollador Front-end',
      en: 'Front-end Developer',
    },
    company: 'Freelance',
    description: {
      es: [
        'Desarrollé aplicaciones web con React, TypeScript y JavaScript ES6+, implementando componentes reutilizables y arquitectura escalable.',
        'SEO técnico (meta tags, Open Graph, datos estructurados) e interfaces responsive pixel-perfect desde diseños Figma con Tailwind CSS.',
        'Optimización de performance mediante code splitting, lazy loading y optimización de assets, logrando hasta 50% de mejora en PageSpeed.',
      ],
      en: [
        'Developed web applications with React, TypeScript and JavaScript ES6+, implementing reusable components and scalable architecture.',
        'Technical SEO (meta tags, Open Graph, structured data) and pixel-perfect responsive interfaces from Figma designs with Tailwind CSS.',
        'Performance optimization through code splitting, lazy loading and asset optimization, achieving up to 50% improvement in PageSpeed.',
      ],
    },
    tags: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SEO', 'Figma'],
  },
  {
    period: '2020 — 2021',
    role: {
      es: 'Desarrollador Web',
      en: 'Web Developer',
    },
    company: 'Freelance (WordPress)',
    description: {
      es: ['Construcción y mantenimiento de sitios en WordPress. Administración de hosting, dominios, DNS y FTP.'],
      en: ['Built and maintained WordPress websites. Managed hosting, domains, DNS and FTP.'],
    },
    tags: ['WordPress', 'HTML', 'CSS'],
  },
]
