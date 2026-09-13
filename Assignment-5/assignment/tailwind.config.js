/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5A36',
          pink: '#E11D74',
          violet: '#8538DC',
          dark: '#0F172A',
          muted: '#64748B',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      backgroundImage: {
        'brand-gradient': 'var(--brand-gradient)',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
