import merge from "deepmerge";
import colors from "../theme/base/colors";
// const typography = require("../theme/base/typography");
// const shadows = require("../theme/base/shadows");
// const breakpoints = require("../theme/base/breakpoints");

const themeConfig = {
  darkMode: "class",
  content: [
    "./node_modules/@mcinarpro/mcinar-ui/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@mcinarpro/mcinar-ui/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    // fontFamily: typography,
    // boxShadow: shadows,
    // screens: breakpoints,
  },
  plugins: [],
};

function withTheme(tailwindConfig: any) {
  // const themeFont = themeConfig.theme.fontFamily;

  // if (themeConfig.theme.fontFamily) {
  //   const { sans, serif, body } = tailwindConfig.theme.fontFamily;

  //   themeFont.sans = sans || themeFont.sans;
  //   themeFont.serif = serif || themeFont.serif;
  //   themeFont.body = body || themeFont.body;
  // }

  return merge(themeConfig, { ...tailwindConfig });
}

export default withTheme;
