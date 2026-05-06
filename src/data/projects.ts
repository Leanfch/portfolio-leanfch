export interface Project {
  id: string
  title: string
  client: string
  type: 'landing-saas' | 'landing-marketing' | 'sitio-web' | 'landing-practica'
  description: string
  myRole: string
  stack: string[]
  metrics?: {
    label: string
    value: string
  }[]
  liveUrl?: string
  coverImage: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'thinkion-check',
    title: 'Check by Thinkion',
    client: 'Thinkion',
    type: 'landing-saas',
    description: 'Landing de adquisición para producto SaaS de auditoría de procesos. Clientes reales: Prune, Mishka, El Club de la Milanesa.',
    myRole: 'Implementación pixel-perfect de diseño Figma. Optimización de performance, assets WebP, formulario de demo con integración a CRM.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP'],
    metrics: [
      { label: 'PageSpeed', value: '91/100' },
      { label: 'Mejora de performance', value: '+72%' },
    ],
    liveUrl: 'https://auditoria.thinkion.com.ar',
    coverImage: '/projects/thinkion/cover.webp',
    featured: true,
  },
  {
    id: '99r',
    title: '99R Pastillas de Freno',
    client: 'Proyecto personal (familia)',
    type: 'sitio-web',
    description: 'Sitio web para marca de pastillas de freno de competición. Migración desde Shopify a sitio estático de alta performance.',
    myRole: 'Diseño e implementación completa. Elección de stack (Astro), catálogo de productos, View Transitions API, optimización de imágenes.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'WebP'],
    liveUrl: 'http://99r.com.ar',
    coverImage: '/projects/99r/cover.webp',
    featured: true,
  },
]
