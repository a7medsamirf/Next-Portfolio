import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863E96", // 240,86, 199
        primaryDark: "#58E6D9", // 80,230,217
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-roboto-mono)'],
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
export default config