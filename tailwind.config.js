/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('./src/images/pattern-bg-desktop.png')",
        mobile: "url('./src/images/pattern-bg-mobile.png')",
      },
      viewports: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        veryDarkGrey: "hsl(0, 0%, 17%)",
        darkGrey: "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        input: "1.125rem",
        heading: "1.25rem",
        base: "1rem",
        subHeading: "0.65rem",
      },
      fontWeight: {
        normal: 400,
        semiBold: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
