/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ubuntu-dark-bg': '#0a0e27',
        'ubuntu-bg-secondary': '#0f1b2e',
        'ubuntu-bg-tertiary': '#1a2d42',
        'ubuntu-text': '#d4d4d4',
        'ubuntu-text-secondary': '#888c91',
        'ubuntu-text-tertiary': '#5a5e64',
        'ubuntu-green': '#5eb83c',
        'ubuntu-blue': '#4a90e2',
        'ubuntu-orange': '#d4714f',
        'ubuntu-red': '#c74757',
        'ubuntu-yellow': '#b8a636',
        'ubuntu-purple': '#9b7ebd',
        'ubuntu-border': '#2d4156',
      },
      fontFamily: {
        'ubuntu-mono': ["'Ubuntu Mono'", 'monospace'],
        'ubuntu': ["'Ubuntu'", 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        floatHover: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glitchText: {
          '0%': { textShadow: '-2px 0 #7FDBCA, 2px 0 #61b5e5' },
          '50%': { textShadow: '2px 0 #7FDBCA, -2px 0 #61b5e5' },
          '100%': { textShadow: '-2px 0 #61b5e5, 2px 0 #7FDBCA' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.6s ease-out forwards',
        'float-hover': 'floatHover 2s ease-in-out infinite',
        'glitch-text': 'glitchText 0.2s infinite',
      },
    },
  },
  plugins: [
    // @tailwindcss/line-clamp ya está incluido por defecto en Tailwind CSS v3.3+
  ],
};