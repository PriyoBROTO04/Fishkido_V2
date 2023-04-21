/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    fontFamily:{
      'the-bold-font':'the-bold-font',
      'Inter': "'Inter', sans-serif",
    },
    extend: {
      colors:{
        'Soft-pink':'hsla(330, 34%, 58%, 0.4)',
        'brown':'hsla(0, 14%, 66%, 1)',
        'pink':'hsla(300, 20%, 67%, 1)',
        'White':'hsla(0, 0%, 72%, 0.35)',
        'pastel':'#FFD8C8',
        'orange':'#B39488',
        'Off-white':'#D9D9D9',
        'Dark-blue':'#4D607B',
      }
    },
  },
  plugins: [],
}

