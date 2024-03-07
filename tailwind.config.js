import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { sm: '1200px' },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        agbalumo: ['Agbalumo', ...defaultTheme.fontFamily.sans],
        glysa: ['Glysa', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        's-10/15': ['0.625rem', { lineHeight: '0.9375rem' }],
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        'xs-medium': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '500' }],
        'xs-semi': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '600' }],
        'xs-bold': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '700' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        'sm-medium': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'sm-semi': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        'sm-bold': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        md: ['1rem', { lineHeight: '1.5rem' }],
        'md-medium': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        'md-semi': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        'md-bold': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        'lg-medium': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        'lg-semi': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'lg-bold': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        xl: ['1.25rem', { lineHeight: '1.875rem' }],
        'xl-medium': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '500' }],
        'xl-semi': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '600' }],
        'xl-bold': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '700' }],
      },
      colors: {
        primary: {
          50: '#ecfdf4',
          100: '#d0fbe2',
          200: '#a6f4cb',
          300: '#6ce9ae',
          400: '#40d896',
          500: '#0ebb76',
          600: '#039860',
          700: '#027a50',
          800: '#056041',
          900: '#054f36',
          950: '#012d1f',
        },
      },
      backgroundImage: {
        brand: 'linear-gradient(rgb(66, 230, 149), rgb(59, 178, 184))',
      },
    },
  },
  plugins: [
    require('./tailwind-plugins/spacing')({ spacing: 100 }),
    require('./tailwind-plugins/base'),
  ],
};
