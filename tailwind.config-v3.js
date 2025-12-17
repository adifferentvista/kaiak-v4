/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode primary
        cream: '#FDFBF7',
        'cream-dark': '#F5F0E8',
        
        // Navy shades
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        
        // Orange accent (same in both modes)
        orange: {
          DEFAULT: '#EA580C',
          light: '#F97316',
          dark: '#C2410C',
        },
        
        // Blue-gray for subtle backgrounds
        'blue-gray': '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
