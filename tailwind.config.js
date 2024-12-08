// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#232536',
        secondary: '#FFD050',
        accent: '#592EA9',
        textGray: '#6D6E76',
        backgroundLight: '#F4F4F4',
        backgroundSoft: '#F4F0F8',
        backgroundLightYellow: '#FBF6EA',
      },
    },
  },
  plugins: [],
}
