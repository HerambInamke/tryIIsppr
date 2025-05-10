/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'earth': {
          50: '#f9f5f0',
          100: '#e8ddcb',
          200: '#d8c7a9',
          300: '#c3a87d',
          400: '#b08c55',
          500: '#96733d',
          600: '#7c5c33',
          700: '#63472a',
          800: '#4d3721',
          900: '#3c2b1c',
        },
        'forest': {
          50: '#f3f8f5',
          100: '#dfeee3',
          200: '#bfdecb',
          300: '#93c5a9',
          400: '#62a57e',
          500: '#3f8b5f',
          600: '#2f7048',
          700: '#27593a',
          800: '#224730',
          900: '#1e3c2a',
        },
        'clay': {
          50: '#fbf7f5',
          100: '#f5e8e3',
          200: '#eacfc5',
          300: '#ddb1a0',
          400: '#cc8e75',
          500: '#bd7359',
          600: '#ab604a',
          700: '#904c3d',
          800: '#764035',
          900: '#63382f',
        },
        'vibrant': {
          50: '#fff8eb',
          100: '#ffecc8',
          200: '#ffd688',
          300: '#ffb94d',
          400: '#ff972a',
          500: '#fb7707',
          600: '#e35705',
          700: '#ba3e08',
          800: '#962f0d',
          900: '#7c290f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      textShadow: {
        'hero': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'texture': "url('https://images.pexels.com/photos/7188662/pexels-photo-7188662.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=1')",
        'grain': "url('https://images.pexels.com/photos/7031404/pexels-photo-7031404.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1')",
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}