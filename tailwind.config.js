/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);",
        "gradient-text":
          "linear-gradient(317deg, rgba(255, 255, 255, 0) -15.1107%, rgb(255, 255, 255) 100%)",
      },
    },
  },
  plugins: [],
};
