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
        'xs': '320px',
        'sm': '375px',
        'md': '425px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1440px',
      },
      width: {
        '18': '18px',
        '20': '20px',
        '22': '22px',
      },
      fontFamily: {
        primary: ["Roboto", "var(--font-family-fallback)"],
        akira: ["Akira Expanded", "var(--font-family-fallback)"],
        fallback: "var(--font-family-fallback)"
      },
  		colors: {
        // Legacy colors (keeping for backward compatibility)
        primary: "#1C1C22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187"
        },
  			lightBackground: "#ffffff",
  			darkBackground: "#121212",
  			lightText: "#333333",
  			darkText: "#f5f5f5",
        
        // New CSS variable-based colors
        brand: {
          primary: "var(--color-primary)",
          "primary-light": "var(--color-primary-light)",
          "primary-dark": "var(--color-primary-dark)",
          secondary: "var(--color-secondary)",
          "secondary-light": "var(--color-secondary-light)",
          "secondary-dark": "var(--color-secondary-dark)",
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          white: "var(--text-white)",
          link: "var(--text-link)",
          "link-hover": "var(--text-link-hover)",
        },
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          dark: "var(--bg-dark)",
        },
        icon: {
          primary: "var(--icon-primary)",
          secondary: "var(--icon-secondary)",
          white: "var(--icon-white)",
          gray: "var(--icon-gray)",
          "gray-light": "var(--icon-gray-light)",
          "gray-dark": "var(--icon-gray-dark)",
        }
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		},
      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      }
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
