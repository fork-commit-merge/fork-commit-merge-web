// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'slate': {
          '960': '#191730',
        }
      },
      backdropBlur: {
        'none': '0',
        'blur': 'blur(2px)',
        'blur-lg': 'blur(4px)',
        'blur-xl': 'blur(8px)',
        'blur-2xl': 'blur(12px)',
        'blur-3xl': 'blur(16px)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
