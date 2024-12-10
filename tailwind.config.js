/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      container: {
        center: true,
        padding: "15px",
        maxWidth: "100%",
      },
      screens:{
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      fontFamily: {
        primary: "var(--font-roboto)"
      },
  		colors: {
        primary: "#1C1C22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187"
        },
  			lightBackground: "#ffffff",
  			darkBackground: "#121212",
  			lightText: "#333333",
  			darkText: "#f5f5f5"
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
