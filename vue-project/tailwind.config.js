/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#4caf50',
        'primary-dark': '#388e3c',
        'secondary-light': '#ff9800',
        'secondary-dark': '#ff5722',
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)',
        'border-light': 'var(--color-border-light)',
        'border-dark': 'var(--color-border-dark)',
      },
      spacing: {
        72: '18rem',
      },
    },
  },
  plugins: [],
}
