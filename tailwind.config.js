/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        TextPrimary: "#5E6871",
        primary: "#6A0DAD",
        orangeprimary: "#E5511A",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",

        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeInLeft: "fadeInLeft 0.5s ease-in-out",
        fadeInRight: "fadeInRight 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },

  plugins: [],
};
