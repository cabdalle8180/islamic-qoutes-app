module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
      },
      colors: {
        'primary': '#6C63FF',
        'secondary': '#FF6F61',
        'accent': '#FFD700',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
