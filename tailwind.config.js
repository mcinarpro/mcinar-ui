function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacityValue("--tw-color-primary-50"),
          100: withOpacityValue("--tw-color-primary-100"),
          200: withOpacityValue("--tw-color-primary-200"),
          300: withOpacityValue("--tw-color-primary-300"),
          400: withOpacityValue("--tw-color-primary-400"),
          500: withOpacityValue("--tw-color-primary-500"),
          600: withOpacityValue("--tw-color-primary-600"),
          700: withOpacityValue("--tw-color-primary-700"),
          800: withOpacityValue("--tw-color-primary-800"),
          900: withOpacityValue("--tw-color-primary-900"),
        },
        secondary: {
          50: withOpacityValue("--tw-color-secondary-50"),
          100: withOpacityValue("--tw-color-secondary-100"),
          200: withOpacityValue("--tw-color-secondary-200"),
          300: withOpacityValue("--tw-color-secondary-300"),
          400: withOpacityValue("--tw-color-secondary-400"),
          500: withOpacityValue("--tw-color-secondary-500"),
          600: withOpacityValue("--tw-color-secondary-600"),
          700: withOpacityValue("--tw-color-secondary-700"),
          800: withOpacityValue("--tw-color-secondary-800"),
          900: withOpacityValue("--tw-color-secondary-900"),
        },
        dark: "#222222",
      },
    },
  },
  plugins: [],
};
