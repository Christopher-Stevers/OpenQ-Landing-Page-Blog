// @ts-nocheck
const colors = require('tailwindcss/colors');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        montserrat: `Montserrat, Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` ,
        mono: `"Ubuntu Mono"`,
      },
      maxWidth: {
        "8xl": "1800px",
      },
      minWidth: {
        "60": "15rem"
      },
      minHeight: {
        '20': '80px',
      },
      maxHeight: {
        '128': '32rem',
      },
      spacing: {
        '128': '32rem'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        transparent: 'transparent',
        'dark-mode': '#121212',
        'app-bg': '#161b22',
        'button-pink': '#FF006A',
        'web-gray': '#585858',
        'custom-cyan': '#22d3ee',
        fuchsia: colors.fuchsia,
        'github-primary': '#2da44e',
        'github-prime-hov': '#2c974b',
        'link-colour': '#39a6ff',
        emerald: colors.emerald,
        lime: colors.lime,
        violet: colors.violet,
        amber: colors.amber,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        indigo: colors.indigo,
        "secondary-btn": "#1f6feb",
        primary: 'rgb(201, 209, 217)',
        muted: 'rgb(139, 148, 158)',
        githubMessageColor: '#161b22'

      },
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeOut: 'fadeOut 1s ease-out forwards',
        fadeInRotation: 'rotateY 3s ease-in-out forwards',
        wiggleY: 'wiggleY 1s ease-in-out forwards',
        wiggleYQuick: 'wiggleY 1s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-in forwards',
        fadeInRight: 'fadeInRight 1s ease-in forwards',
        fadeInTop: 'fadeInTop 1s ease-in forwards',
      },
      space: {
        "11/12": "91.6%"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        rotateY: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        wiggleY: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(20deg)' },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        fadeInLeftFast: {
          '0%': {
            opacity: 0,
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        fadeInTop: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
};
