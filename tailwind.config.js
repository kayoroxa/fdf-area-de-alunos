/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/organisms/**/*.{js,ts,jsx,tsx}',
    './src/molecules/**/*.{js,ts,jsx,tsx}',
    './src/atoms/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
      dropShadow: {
        icon: '0px 0px 6px rgba(0, 0, 0, 0.5)',
        '4xl': [
          '0 0px 35px rgba(0, 0, 0, 0.25)',
          '0 0px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [],
}
