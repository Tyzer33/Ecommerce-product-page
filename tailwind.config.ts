import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: 'hsla(var(--background))',
        accent: 'hsla(var(--accent))',
      },
      textColor: {
        body: 'hsla(var(--txt-body))',
        heading: 'hsla(var(--txt-heading))',
      },
      fill: {
        base: 'hsla(var(--fill-base))',
        active: 'hsla(var(--fill-active))',
      },
      fontFamily: {
        'Kumbh-sans': ['"Kumbh Sans"', 'sans-serif'],
      },
      outlineColor: {
        accent: 'hsla(var(--accent))',
      },
      margin: {
        desktop: '4rem',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        main: 'hsla(var(--border))',
      },
      screens: {
        'cart-md': '500px',
      },
    },
  },
  plugins: [],
} satisfies Config
