/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '480px', // => @media (min-width: 480px) { ... }
        sm: '640px', // => @media (min-width: 640px) { ... }
        md: '768px', // => @media (min-width: 768px) { ... }
        lg: '1024px', // => @media (min-width: 1024px) { ... }
        xl: '1280px', // => @media (min-width: 1280px) { ... }
        '2xl': '1536px', // => @media (min-width: 1536px) { ... }
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      colors: {
        primary: {
          50: 'var(--sny-theme-primary-50)',
          100: 'var(--sny-theme-primary-100)',
          200: 'var(--sny-theme-primary-200)',
          300: 'var(--sny-theme-primary-300)',
          400: 'var(--sny-theme-primary-400)',
          500: 'var(--sny-theme-primary-500)',
          600: 'var(--sny-theme-primary-600)',
          700: 'var(--sny-theme-primary-700)',
          800: 'var(--sny-theme-primary-800)',
          900: 'var(--sny-theme-primary-900)',
          A100: 'var(--sny-theme-primary-a100)',
          A200: 'var(--sny-theme-primary-a200)',
          A400: 'var(--sny-theme-primary-a400)',
          A700: 'var(--sny-theme-primary-a700)',
        },
        accent: {
          50: 'var(--sny-theme-accent-50)',
          100: 'var(--sny-theme-accent-100)',
          200: 'var(--sny-theme-accent-200)',
          300: 'var(--sny-theme-accent-300)',
          400: 'var(--sny-theme-accent-400)',
          500: 'var(--sny-theme-accent-500)',
          600: 'var(--sny-theme-accent-600)',
          700: 'var(--sny-theme-accent-700)',
          800: 'var(--sny-theme-accent-800)',
          900: 'var(--sny-theme-accent-900)',
          A100: 'var(--sny-theme-accent-a100)',
          A200: 'var(--sny-theme-accent-a200)',
          A400: 'var(--sny-theme-accent-a400)',
          A700: 'var(--sny-theme-accent-a700)',
        },
        warn: {
          50: 'var(--sny-theme-warn-50)',
          100: 'var(--sny-theme-warn-100)',
          200: 'var(--sny-theme-warn-200)',
          300: 'var(--sny-theme-warn-300)',
          400: 'var(--sny-theme-warn-400)',
          500: 'var(--sny-theme-warn-500)',
          600: 'var(--sny-theme-warn-600)',
          700: 'var(--sny-theme-warn-700)',
          800: 'var(--sny-theme-warn-800)',
          900: 'var(--sny-theme-warn-900)',
          A100: 'var(--sny-theme-warn-a100)',
          A200: 'var(--sny-theme-warn-a200)',
          A400: 'var(--sny-theme-warn-a400)',
          A700: 'var(--sny-theme-warn-a700)',
        },
      },
      zIndex: {
        '-10': '-10',
        100: '100',
        300: '300',
        500: '500',
        700: '700',
        1000: '1000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

