import * as React from "react";
import { styled } from "./stitches.config";

export const Button = styled("button", {
  all: "unset",
  appearance: "none",

  borderRadius: "6px",
  backgroundColor: "$green9",
  color: "$hiContrast",
  transition: "$default",
  padding: "0.7rem",

  "&:hover": {
    backgroundColor: "$green10",
  },

  "&:focus-visible": {
    outline: "none",
    boxShadow: `0 0 0 3px $colors$blueA7`,
  },
});
