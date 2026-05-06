/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-card': 'var(--color-bg-card)',
        'bg-subtle': 'var(--color-bg-subtle)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      fontSize: {
        xs:   'var(--text-xs)',
        sm:   'var(--text-sm)',
        base: 'var(--text-base)',
        lg:   'var(--text-lg)',
        xl:   'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
