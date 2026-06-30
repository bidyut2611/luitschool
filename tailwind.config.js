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
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
        },
        bg: '#0a0a0c',
        paper: '#111114',
        surface: '#18181b',
        line: 'rgba(255,255,255,0.08)',
        ink: {
          DEFAULT: '#f4f4f5',
          soft: 'rgba(244,244,245,0.55)',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-gallery': 'marquee 60s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'ken-burns': 'kenburns 25s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 28px -6px rgba(245, 158, 11, 0.5)' },
          '50%': { boxShadow: '0 0 40px -4px rgba(245, 158, 11, 0.7)' },
        },
      },
    },
  },
  plugins: [],
}
