import {
  blackA,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  slate,
  whiteA,
  blueA,
  blueDarkA,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...blueA,
      ...red,
      ...green,
      ...slate,
      ...blackA,
      ...whiteA,
      hiContrast: "$slate12",
      loContrast: "white",
    },
    transitions: {
      default: "all 0.2s ease-in-out",
    },
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    ...grayDark,
    ...blueDark,
    ...blueDarkA,
    ...redDark,
    ...greenDark,
    ...slate,
    ...blackA,
    ...whiteA,
    hiContrast: "$slate12",
    loContrast: "$slate1",
  },
});

globalCss({
  "*": {
    fontFamily: `"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },

  body: {
    // margin: 0,
    // padding: 0,
  },

  "html.dark": {
    background: "$gray1",
  },

  html: {
    transition: "background 0.5s ease-in-out",
  },
})();
