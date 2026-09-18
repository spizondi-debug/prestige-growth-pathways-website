/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Light theme surfaces ----
        paper: '#FFFFFF', // main background
        mist: '#F7F9FC', // secondary background
        sky: '#F2F7FC', // soft blue section
        mint: '#F3FAF6', // soft green section

        // ---- Text ----
        heading: '#0B1B3B', // dark navy headings
        body: '#4B5565', // professional grey body
        muted: '#7A8699', // muted grey
        line: '#E4EAF3', // hairline borders on light

        // ---- Deep navy (dark sections + footer) ----
        navy: {
          900: '#081228',
          800: '#0B1730',
          700: '#122242',
          600: '#1B2E52',
        },

        // ---- Prestige brand palette ----
        ink: {
          900: '#070C1B',
          800: '#0A1124',
          700: '#0E1730',
          600: '#13203F',
        },
        prestige: {
          blue: '#1E4FD8',
          'blue-deep': '#0A2A6B',
          'blue-soft': '#3B6BF0',
          green: '#0FB87A',
          'green-bright': '#37E2A5',
          'green-deep': '#0A8A5C',
        },
        cloud: {
          50: '#F6F8FF',
          100: '#EEF2FF',
          200: '#DDE5FA',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #1E4FD8 0%, #0FB87A 100%)',
        'brand-gradient-soft': 'linear-gradient(120deg, #3B6BF0 0%, #0FB87A 100%)',
        // Light, airy hero mesh for the new theme.
        'mesh-light':
          'radial-gradient(55% 55% at 12% 8%, rgba(30,79,216,0.10) 0%, transparent 60%), radial-gradient(45% 45% at 90% 12%, rgba(15,184,122,0.10) 0%, transparent 58%)',
        // Retained dark mesh for the selective navy sections.
        'mesh-hero':
          'radial-gradient(60% 60% at 18% 20%, rgba(30,79,216,0.45) 0%, transparent 60%), radial-gradient(50% 50% at 85% 30%, rgba(15,184,122,0.35) 0%, transparent 55%), radial-gradient(60% 80% at 60% 100%, rgba(10,42,107,0.55) 0%, transparent 60%)',
        'glass-edge':
          'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        // Light theme card shadows
        card: '0 1px 2px rgba(11,27,59,0.04), 0 10px 30px -16px rgba(11,27,59,0.18)',
        'card-hover': '0 18px 40px -20px rgba(11,27,59,0.28)',
        soft: '0 2px 10px rgba(11,27,59,0.06)',
        // Brand glows (used sparingly on CTAs / dark sections)
        'glow-blue': '0 18px 40px -18px rgba(30,79,216,0.45)',
        'glow-green': '0 18px 40px -18px rgba(15,184,122,0.4)',
        glass: '0 20px 60px -20px rgba(5, 12, 35, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.08)',
        lift: '0 30px 70px -30px rgba(5, 12, 35, 0.65)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
      },
    },
  },
  plugins: [],
}
