/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Prestige brand palette ----
        ink: {
          900: '#070C1B', // deepest background
          800: '#0A1124',
          700: '#0E1730',
          600: '#13203F',
        },
        prestige: {
          // Prestige Blue
          blue: '#1E4FD8',
          'blue-deep': '#0A2A6B',
          'blue-soft': '#3B6BF0',
          // Prestige Green
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
        display: ['Sora', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Fluid display sizes
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #1E4FD8 0%, #0FB87A 100%)',
        'brand-gradient-soft': 'linear-gradient(120deg, #3B6BF0 0%, #37E2A5 100%)',
        'mesh-hero':
          'radial-gradient(60% 60% at 18% 20%, rgba(30,79,216,0.45) 0%, transparent 60%), radial-gradient(50% 50% at 85% 30%, rgba(15,184,122,0.35) 0%, transparent 55%), radial-gradient(60% 80% at 60% 100%, rgba(10,42,107,0.55) 0%, transparent 60%)',
        'glass-edge':
          'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glass: '0 20px 60px -20px rgba(5, 12, 35, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.08)',
        'glow-blue': '0 0 50px -8px rgba(30,79,216,0.55)',
        'glow-green': '0 0 50px -8px rgba(15,184,122,0.5)',
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
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
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
