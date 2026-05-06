# Portfolio — Leandro Fernandez Chapotot
## Especificación del Proyecto para Claude Code

---

## Descripción General

Construir el portfolio personal de Leandro Fernandez Chapotot, desarrollador Full-Stack especializado en landing pages, UI development y performance web. El portfolio es en sí mismo una landing page que demuestra las habilidades del autor.

**URL objetivo:** leanfch.dev (o similar)
**Deploy:** Vercel (free tier)
**Stack elegido:** Astro + Tailwind CSS + TypeScript

---

## Objetivos del Portfolio

1. Mostrar proyectos reales en producción con contexto de negocio y métricas
2. Demostrar habilidad técnica con performance perfecta (PageSpeed 95+)
3. Servir como herramienta de contacto para recruiters y clientes
4. Mostrar criterio visual propio mediante landings de práctica

---

## Stack Técnico

```
Framework:     Astro 4.x
Estilos:       Tailwind CSS
Lenguaje:      TypeScript
Animaciones:   GSAP (ScrollTrigger para scroll animations)
Deploy:        Vercel
Imágenes:      Formato WebP, lazy loading nativo
Fuentes:       Variable fonts vía Google Fonts o Fontsource
```

**Restricciones técnicas:**
- Cero frameworks JS innecesarios (no React, no Vue salvo que sea estrictamente necesario)
- JavaScript mínimo — Astro islands solo donde haya interactividad real
- Sin librerías de componentes externas (no shadcn, no DaisyUI)
- CSS con Tailwind + clases custom cuando Tailwind no alcance
- PageSpeed objetivo: 95+ en mobile y desktop

---

## Estructura de Archivos

```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.png          ← Open Graph image 1200x630
│   └── projects/
│       ├── thinkion/
│       │   ├── cover.webp    ← Screenshot full-page
│       │   └── metrics.webp  ← Screenshot de PageSpeed
│       ├── 99r/
│       │   └── cover.webp
│       └── [landing-practica]/
│           └── cover.webp
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── CaseStudy.astro
│   │   ├── Stack.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  ← SEO, meta tags, OG, fonts
│   ├── pages/
│   │   └── index.astro       ← Single page portfolio
│   ├── data/
│   │   └── projects.ts       ← Array de proyectos tipado
│   └── styles/
│       └── global.css        ← Variables CSS, reset, base styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── CLAUDE.md                 ← Este archivo
```

---

## Diseño y Estética

### Mood
- Oscuro (dark mode por defecto), profesional, moderno
- Sin colores chillones — paleta contenida con un color acento
- Tipografía con personalidad pero legible
- Whitespace generoso
- Sutil, no ruidoso

### Paleta de Colores (variables CSS)
```css
--color-bg:          #0A0A0A    /* fondo principal */
--color-bg-card:     #111111    /* fondo de cards */
--color-bg-subtle:   #1A1A1A    /* fondo secciones alternadas */
--color-border:      #222222    /* bordes */
--color-text:        #E8E8E8    /* texto principal */
--color-text-muted:  #888888    /* texto secundario */
--color-accent:      #4F7EF7    /* azul eléctrico — único color vibrante */
--color-accent-soft: #1E3A6E    /* accent con opacidad para fondos */
```

### Tipografía
```
Títulos:    "Geist" o "Inter" — peso 700-800
Cuerpo:     "Inter" — peso 400-500
Monospace:  "Geist Mono" — para stack/tech tags
Tamaños:    fluid type scale con clamp()
```

### Animaciones
- Scroll-triggered fade up en secciones al aparecer (GSAP ScrollTrigger)
- Hover states sutiles en cards (transform: translateY(-4px), border color change)
- Sin animaciones de entrada agresivas que bloqueen el contenido
- `prefers-reduced-motion` respetado

---

## Secciones del Portfolio (Single Page)

### 1. Header / Nav
```
- Logo: "lf" en monospace o simplemente "Leandro"
- Links: #proyectos, #stack, #contacto
- Sticky, blur backdrop
- Sin hamburger menu innecesario — tres links caben en mobile
```

### 2. Hero
```
- Headline principal: "Desarrollo landing pages que convierten."
- Subheadline: "Full-Stack Developer especializado en UI, performance y SEO técnico. Buenos Aires, Argentina."
- CTA primario: "Ver proyectos" (scroll a #proyectos)
- CTA secundario: "Contactar" (scroll a #contacto)
- Disponibilidad: badge verde "Disponible para nuevos proyectos"
- Sin foto — identidad visual del texto solo
```

### 3. Proyectos (#proyectos)
```
Grid de project cards, cada una con:
- Screenshot del proyecto (imagen WebP optimizada)
- Nombre del proyecto
- Tipo: "Landing SaaS" / "Sitio Web" / "Landing de Práctica"
- Tags de stack usado
- Descripción breve (1 línea)
- Botón "Ver caso" → expande o navega al caso de estudio
- Botón "Ver sitio" → link externo (si existe)
```

### 4. Caso de Estudio (por proyecto)
```
Cada proyecto expandido muestra:
- Contexto: qué era el proyecto, para quién
- Mi rol: exactamente qué hice yo (implementación de diseño / diseño propio)
- Stack técnico usado
- Decisiones técnicas clave
- Resultados / métricas (si existen)
- Screenshots o mockups
```

### 5. Stack (#stack)
```
Grilla de tecnologías con ícono + nombre + nivel
Categorías:
- Frontend: HTML, CSS, JavaScript, TypeScript, React, Astro, Tailwind, HTMX
- Backend: PHP (MVC), Node.js, MySQL, Firebase
- Herramientas: Git, Docker, Figma, Lighthouse, Vercel
- Performance: Core Web Vitals, CDN, WebP, lazy loading
```

### 6. Contacto (#contacto)
```
- Headline: "¿Tenés un proyecto?"
- Subtext breve
- Email copiable / link mailto
- Link a LinkedIn
- Link a GitHub
- Sin formulario (reduce complejidad y mantenimiento)
```

### 7. Footer
```
- "Leandro Fernandez Chapotot © 2026"
- Links sociales mínimos
- "Hecho con Astro y Tailwind CSS"
```

---

## Datos de Proyectos (projects.ts)

```typescript
interface Project {
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

const projects: Project[] = [
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
      { label: 'Mejora de performance', value: '+72%' }
    ],
    liveUrl: 'https://auditoria.thinkion.com.ar',
    coverImage: '/projects/thinkion/cover.webp',
    featured: true
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
    featured: true
  }
  // Acá se agregan las landings de práctica cuando estén listas
]
```

---

## Landings de Práctica a Crear

Estas landings se construyen separadamente y se agregan al portfolio como proyectos propios. Cada una tiene libertad total de diseño — sin cliente, sin restricciones.

### Landing 1 — Fintech / SaaS (Dark mode)
```
Concepto:    App ficticia de pagos internacionales (similar a Wise)
Estética:    Dark, gradientes sutiles, glassmorphism moderado
Animaciones: Número counter al hacer scroll, cards con hover 3D
Stack:       HTML + CSS + GSAP + TypeScript
Secciones:   Hero con mockup, features, precios, CTA final
```

### Landing 2 — Producto minimalista
```
Concepto:    Producto físico premium ficticio (auriculares, reloj, etc.)
Estética:    Blanco, mucho whitespace, tipografía grande, una foto hero
Animaciones: Parallax suave, fade in de elementos
Stack:       Astro + Tailwind
Secciones:   Hero de impacto, especificaciones, galería, compra
```

### Landing 3 — Agencia / Servicio (opcional)
```
Concepto:    Agencia de marketing digital ficticia
Estética:    Bold, colores fuertes, energía
Stack:       HTML + CSS + JS + GSAP
Secciones:   Hero animado, servicios, clientes, contacto
```

---

## SEO y Meta Tags (BaseLayout.astro)

```html
<!-- Básico -->
<title>{title} | Leandro Fernandez — Landing Page Developer</title>
<meta name="description" content="..." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://leanfch.dev" />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://leanfch.dev" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="/og-image.png" />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Leandro Fernandez Chapotot",
  "jobTitle": "Landing Page Developer",
  "url": "https://leanfch.dev",
  "sameAs": [
    "https://linkedin.com/in/chapototleandro",
    "https://github.com/leanfch"
  ]
}
</script>
```

---

## Performance Requirements

- **PageSpeed mobile:** 95+
- **PageSpeed desktop:** 98+
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **INP:** < 200ms

**Checklist técnico:**
- [ ] Todas las imágenes en WebP con width/height explícitos
- [ ] Lazy loading en imágenes below-the-fold
- [ ] Preload en imagen hero (above-the-fold)
- [ ] Fuentes con `font-display: swap`
- [ ] CSS crítico inline en `<head>`
- [ ] Sin render-blocking scripts
- [ ] `astro.config.mjs` con compresión habilitada

---

## Accesibilidad

- Contraste mínimo 4.5:1 para texto normal
- Navegación por teclado funcional (focus visible en todos los elementos interactivos)
- Alt text en todas las imágenes
- Landmarks semánticos: `<header>`, `<main>`, `<section>`, `<footer>`
- `aria-label` en links sin texto descriptivo
- `prefers-reduced-motion` para desactivar animaciones GSAP

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Deploy a Vercel
vercel --prod
```

---

## Flujo de Trabajo con Git

### Regla principal
**Claude Code debe pausar y esperar confirmación del usuario antes de continuar al siguiente checkpoint.** No avanzar automáticamente entre etapas.

### Mensaje de pausa estándar
Cuando llegues a un checkpoint, mostrá exactamente este mensaje y esperá respuesta antes de continuar:

```
✅ CHECKPOINT [nombre] completado.

Archivos creados/modificados:
- [lista de archivos]

👉 Por favor hacé commit y push antes de continuar:

  git add .
  git commit -m "[mensaje sugerido]"
  git push origin main

Avisame cuando estés listo para continuar con el siguiente paso.
```

### Checkpoints obligatorios

**CHECKPOINT 1 — Setup inicial**
Completar cuando: proyecto inicializado con Astro + Tailwind + TypeScript, estructura de carpetas creada, `CLAUDE.md` en la raíz, primer commit base.
```
git commit -m "feat: init portfolio — Astro + Tailwind + TypeScript"
```

**CHECKPOINT 2 — Base Layout y estilos globales**
Completar cuando: `BaseLayout.astro` con SEO completo, `global.css` con variables CSS y paleta de colores, fuentes configuradas, Tailwind config lista.
```
git commit -m "feat: base layout, SEO meta tags, design tokens, typography"
```

**CHECKPOINT 3 — Header y Hero**
Completar cuando: `Header.astro` sticky con nav funcional y `Hero.astro` con headline, subheadline, CTAs y badge de disponibilidad. Responsive en mobile y desktop.
```
git commit -m "feat: header nav + hero section"
```

**CHECKPOINT 4 — Sección Proyectos**
Completar cuando: `ProjectCard.astro` y `CaseStudy.astro` construidos, `projects.ts` con datos de los dos proyectos reales, grid responsive de cards funcionando, casos de estudio expandibles.
```
git commit -m "feat: projects section — cards + case studies"
```

**CHECKPOINT 5 — Sección Stack**
Completar cuando: `Stack.astro` con grilla de tecnologías, íconos y categorías. Responsive.
```
git commit -m "feat: stack section"
```

**CHECKPOINT 6 — Sección Contacto y Footer**
Completar cuando: `Contact.astro` con email, LinkedIn y GitHub. `Footer.astro`. Página completa sin animaciones.
```
git commit -m "feat: contact section + footer — page structure complete"
```

**CHECKPOINT 7 — Animaciones GSAP**
Completar cuando: ScrollTrigger fade-up en todas las secciones, hover states en cards, animaciones con `prefers-reduced-motion`.
```
git commit -m "feat: GSAP scroll animations + hover states"
```

**CHECKPOINT 8 — Performance y accesibilidad**
Completar cuando: todas las imágenes en WebP con dimensiones explícitas, lazy loading, preload del hero, fuentes con `font-display: swap`, auditoría de contraste y navegación por teclado.
```
git commit -m "perf: image optimization, lazy loading, a11y audit"
```

**CHECKPOINT 9 — Build final y deploy**
Completar cuando: `npm run build` sin errores ni warnings, PageSpeed 95+ verificado, deploy en Vercel funcionando.
```
git commit -m "chore: production build verified — deploy ready"
```

### Commits intermedios (sin pausa obligatoria)
Si dentro de un checkpoint hay cambios grandes, Claude Code puede sugerir commits intermedios opcionales:
```
💡 Sugerencia de commit intermedio (opcional):
  git commit -m "wip: [descripción]"
```

### Convención de mensajes de commit
```
feat:   nueva funcionalidad
fix:    corrección de bug
perf:   mejora de performance
style:  cambios de estilos sin lógica
chore:  configuración, dependencias
wip:    trabajo en progreso (commits intermedios)
```

---

## Notas Importantes para Claude Code

1. **El portfolio es single-page** — todo en `index.astro`, sin rutas adicionales por ahora
2. **Mobile-first** — diseñar para 390px primero, escalar a desktop
3. **Sin over-engineering** — Astro islands solo donde haya interactividad real (el resto es HTML estático)
4. **Animaciones con GSAP** — importar solo los módulos necesarios (`gsap/ScrollTrigger`)
5. **Los proyectos viven en `projects.ts`** — agregar nuevos proyectos ahí sin tocar los componentes
6. **Las imágenes de proyectos** — el usuario las va a proveer en WebP. Usar placeholders hasta entonces
7. **El diseño es dark mode por defecto** — no implementar toggle de tema por ahora
8. **Idioma del portfolio: español** — todo el copy en español, código en inglés