/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-card': '#111111',
        'bg-subtle': '#1A1A1A',
        border: '#222222',
        text: '#E8E8E8',
        'text-muted': '#888888',
        accent: '#4F7EF7',
        'accent-soft': '#1E3A6E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
