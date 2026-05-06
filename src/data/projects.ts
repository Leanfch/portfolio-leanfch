export interface Project {
  id: string
  title: string
  client: string
  type: 'landing-saas' | 'landing-marketing' | 'sitio-web' | 'landing-practica'
  description: { es: string; en: string }
  myRole: { es: string; en: string }
  stack: string[]
  metrics?: {
    label: { es: string; en: string }
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
    description: {
      es: 'Landing de adquisición para producto SaaS de auditoría de procesos. Clientes reales: Prune, Mishka, El Club de la Milanesa.',
      en: 'Acquisition landing page for a SaaS process audit product. Real clients: Prune, Mishka, El Club de la Milanesa.',
    },
    myRole: {
      es: 'Implementación pixel-perfect de diseño Figma. Optimización de performance, assets WebP, formulario de demo con integración a CRM.',
      en: 'Pixel-perfect Figma design implementation. Performance optimization, WebP assets, demo form with CRM integration.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP'],
    metrics: [
      { label: { es: 'PageSpeed',              en: 'PageSpeed'              }, value: '91/100' },
      { label: { es: 'Mejora de performance',  en: 'Performance improvement' }, value: '+72%'   },
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
    description: {
      es: 'Sitio web para marca de pastillas de freno de competición. Migración desde Shopify a sitio estático de alta performance.',
      en: 'Website for a competition brake pad brand. Migration from Shopify to a high-performance static site.',
    },
    myRole: {
      es: 'Diseño e implementación completa. Elección de stack (Astro), catálogo de productos, View Transitions API, optimización de imágenes.',
      en: 'Full design and implementation. Stack selection (Astro), product catalog, View Transitions API, image optimization.',
    },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'WebP'],
    liveUrl: 'http://99r.com.ar',
    coverImage: '/projects/99r/cover.webp',
    featured: true,
  },
]
