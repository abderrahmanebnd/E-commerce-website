/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "var(--black-color)",
        },
        bgColor: {
          DEFAULT: "var(--bg-color)",
          2: "var(--bg-color-2)",
          3: "var(--bg-color-3)",
        },
        main: {
          DEFAULT: "var(--main-color)",
          2: "var(--main-color-2)",
        },
        text: {
          DEFAULT: "var(--text-color)",
          muted: "var(--text-muted)",
        },
        track: "var(--track-color)",
        thumb: "var(--thumb-color)",
        "thumb-hover": "var(--thumb-hover-color)",
        fb: "var(--fb-color)",
        google: "var(--google-color)",
        twitter: "var(--twitter-color)",
      },
      textShadow: {
        DEFAULT: "var(--text-shadow)",
      },
    },
  },
  plugins: [],
};
