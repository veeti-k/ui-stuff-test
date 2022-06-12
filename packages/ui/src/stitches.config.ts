import {
  blackA,
  grass,
  grassDark,
  red,
  redDark,
  slate,
  whiteA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  blue,
  blueDark,
  tomato,
  tomatoDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, keyframes, globalCss, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      ...tomato,
      ...blue,
      ...gray,
      ...red,
      ...grass,
      ...slate,
      ...blackA,
      ...whiteA,
      ...grayA,
      hiContrast: "$slate12",
      loContrast: "$slate1",
    },
    transitions: {
      default: "all 0.2s ease-in-out",
    },
  },
  media: {
    hover: "(any-hover: hover)",
    motionOk: "(prefers-reduced-motion: no-preference)",
    bp1: "(min-width: 576px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 992px)",
    bp4: "(min-width: 1200px)",
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    ...tomatoDark,
    ...blueDark,
    ...grayDark,
    ...redDark,
    ...grassDark,
    ...slate,
    ...blackA,
    ...whiteA,
    ...grayDarkA,
    hiContrast: "$slate1",
    loContrast: "$slate12",
  },
});

globalCss({
  "html.dark": {
    background: "$gray1",
  },
})();
