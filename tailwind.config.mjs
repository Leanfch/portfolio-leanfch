/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           'rgb(10 10 10 / <alpha-value>)',
        'bg-card':    'rgb(17 17 17 / <alpha-value>)',
        'bg-subtle':  'rgb(26 26 26 / <alpha-value>)',
        border:       'rgb(34 34 34 / <alpha-value>)',
        text:         'rgb(232 232 232 / <alpha-value>)',
        'text-muted': 'rgb(136 136 136 / <alpha-value>)',
        accent:       'rgb(79 126 247 / <alpha-value>)',
        'accent-soft':'rgb(30 58 110 / <alpha-value>)',
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
    },
  },
  plugins: [],
};
