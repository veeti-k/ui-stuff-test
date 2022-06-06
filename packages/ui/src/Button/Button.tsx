import * as React from "react";
import { styled } from "../stitches.config";

export const Button = styled("button", {
  all: "unset",
  appearance: "none",

  color: "$hiContrast",

  borderRadius: "8px",
  padding: "0.6rem 0.7rem",

  transition: "all 0.2s ease-in-out",
  "-webkit-tap-highlight-color": "transparent",

  "&:focus-visible": {
    outline: "none",
    boxShadow: `0 0 0 3px $colors$blue7`,
  },

  variants: {
    red: {
      true: {
        color: "white",
        backgroundColor: "$red9",

        "@hover": {
          "&:hover": {
            backgroundColor: "$red10",
          },
        },

        "&:active": {
          backgroundColor: "$red11",
        },
      },
    },
    green: {
      true: {
        color: "white",
        backgroundColor: "$grass9",

        "@hover": {
          "&:hover": {
            backgroundColor: "$grass10",
          },
        },

        "&:active": {
          backgroundColor: "$grass11",
        },
      },
    },
    subtle: {
      true: {
        "@hover": {
          "&:hover": {
            backgroundColor: "$gray3",
          },
        },

        "&:active": {
          backgroundColor: "$gray4",
        },
      },
    },
    outline: {
      true: {
        border: "1px solid $gray7",

        "@hover": {
          "&:hover": {
            backgroundColor: "$gray4",
          },
        },

        "&:active": {
          backgroundColor: "$gray5",
        },
      },
    },
  },

  defaultVariants: {
    outline: true,
  },
});
