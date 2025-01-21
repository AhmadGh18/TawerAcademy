/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        TextPrimary: "#5E6871",
        TextHover: "#6A0DAD",
      },
    },
  },
  plugins: [],
};
