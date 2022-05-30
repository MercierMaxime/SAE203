module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Violet-80%": "#322e88",
        "Violet-foncer": "#322e88",
        "Noir": "#000000",
        "Jaune-40%": "#ffe607",
        "Vert": "#54bb30",
        "Bleu-ciel": "#29c0f1",
        "Gris": "#c4c4c4",
        "Blanc": "#ffffff",
        "Vert-80%": "#54bb30",
        "Violet-60%": "#322e88",
        "Bleu-clair": "#90d8f8",
        "Gris-foncer": "#5e6468",
        "Jaune": "#ffe607",
        "Bleu-foncer": "#1951a5"
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.125rem",
        "7xl": "3.75rem",
        "8xl": "5rem",
        "9xl": "6rem"
      },
      "fontFamily": {
        "beckman": "Beckman",
        "poppins": "Poppins",
        "helvetica": "Helvetica"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.625rem",
        "default": "0.9375rem",
        "lg": "1.25rem",
        "xl": "1.5625rem",
        "2xl": "2.1875rem",
        "3xl": "2.8271484375rem",
        "4xl": "5.0888671875rem",
        "full": "9999px"
      }
    }
  },
  plugins: [],
}
