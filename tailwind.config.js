/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Surfaces (restrained corporate palette) ----
        paper: '#FFFFFF', // main background
        mist: '#F6F8FB', // secondary light background
        sand: '#FAFAF8', // soft neutral

        // ---- Text ----
        heading: '#0D2340', // dark navy headings
        body: '#48586A', // professional grey body
        muted: '#6B7A8D', // muted grey
        line: '#E2E8F0', // borders

        // ---- Deep navy (footer + selective CTA band) ----
        navy: {
          900: '#0A1B33',
          800: '#0D2340',
          700: '#15304F',
          600: '#1E3E63',
        },

        // ---- Prestige brand ----
        prestige: {
          blue: '#1E4FD8',
          'blue-deep': '#163C9E',
          'blue-soft': '#3B6BF0',
          green: '#0FB87A',
          'green-deep': '#0A8A5C',
        },
        cloud: {
          50: '#F6F8FF',
          100: '#EEF2FF',
          200: '#D7E0EE',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'Arial', 'sans-serif'],
        display: ['"DM Sans"', 'Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Calmer, more human heading scale
        'display-xl': ['clamp(3rem, 5vw, 5rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2.5rem, 4vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.012em' }],
        'display-md': ['clamp(2rem, 3vw, 2.8rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        // Card / button defaults lean smaller and more corporate
        card: '12px',
        btn: '8px',
      },
      backgroundImage: {
        // Kept for the single dark CTA accent only; not a default.
        'brand-gradient': 'linear-gradient(120deg, #1E4FD8 0%, #0FB87A 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(13, 35, 64, 0.04)',
        'card-hover': '0 6px 20px -10px rgba(13, 35, 64, 0.18)',
        soft: '0 1px 2px rgba(13, 35, 64, 0.05)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
