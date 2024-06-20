import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['"Kumbh Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
