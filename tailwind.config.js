/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, var(--black, #ffffff) 0%, var(--darkBlue, rgb(231, 189, 255)) 100%)",
        "gradient-linear":
          "linear-gradient(0deg,var(--black, #ffffff) 0%,var(--darkBlue, rgb(231, 189, 255)) 100%)",
        "gradient-text":
          "linear-gradient(317deg, rgba(255, 255, 255, 0) -15.1107%, rgb(255, 255, 255) 100%)",
        "gradient-box":
          "linear-gradient(0deg,var(--darkBlue, rgb(231, 189, 255)) 0%, var(--black, #ffffff) 100%)",
      },
      colors: {
        primary: "rgb(144, 79,255)",
        borderColor: "rgb(43, 43, 43)"
      }
    },
  },
  plugins: [],
};

// background : linear-gradient(0deg,var(--to) 0%,var(--token-2146163d-0a23-4c51-9b15-644a6db42812, rgb(231, 189, 255)) 100%)
// linear-gradient(0deg,var(rgb(0, 0, 0), #ffffff) 0%,var(rgb(31, 0, 84), rgb(231, 189, 255)) 100%)

// var(--token-556a66a6-7f4b-4118-b327-ed374e4a0f03, rgb(144, 79, 255))
