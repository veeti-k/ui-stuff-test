import {
  blackA,
  grass,
  grassDark,
  red,
  redDark,
  slate,
  whiteA,
  gray,
  grayDark,
  blue,
  blueDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      ...blue,
      ...gray,
      ...red,
      ...grass,
      ...slate,
      ...blackA,
      ...whiteA,
      hiContrast: "$slate12",
      loContrast: "$slate1",
    },
  },
  media: {
    hover: "(any-hover: hover)",
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    ...blueDark,
    ...grayDark,
    ...redDark,
    ...grassDark,
    ...slate,
    ...blackA,
    ...whiteA,
    hiContrast: "$slate1",
    loContrast: "$slate12",
  },
});

globalCss({
  "html.dark": {
    background: "$gray1",
  },
})();
