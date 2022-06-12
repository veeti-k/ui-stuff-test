import * as React from "react";
import { styled } from "../stitches.config";

export const StyledInput = styled("input", {
  all: "unset",

  transition: "$default",

  padding: "0.6rem 0.7rem",
  fontSize: "16px",

  color: "$hiContrast",

  borderRadius: 8,
  border: "1px solid $colors$gray7",

  "@hover": {
    "&:hover": {
      borderColor: "$colors$gray9",
    },
  },

  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 3px $colors$blue7`,
    borderColor: "$colors$gray9",
  },

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },

    invalid: {
      true: {
        borderColor: "$tomato8",

        "@hover": {
          "&:hover": {
            borderColor: "$colors$tomato9",
          },
        },

        "&:focus": {
          outline: "none",
          boxShadow: `0 0 0 3px $colors$tomato8`,
          borderColor: "$colors$tomato9",
        },
      },
    },
  },
});

export interface InputProps extends React.ComponentProps<typeof StyledInput> {
  label?: string;
  error?: string | React.ReactNode;
}
