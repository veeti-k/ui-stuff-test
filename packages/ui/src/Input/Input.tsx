import * as React from "react";
import { styled } from "../stitches.config";

export const Input = styled("input", {
  all: "unset",

  transition: "$default",

  padding: "0 0.5rem",
  fontSize: "16px",

  color: "$hiContrast",

  borderRadius: 8,
  border: "1px solid $colors$gray7",

  "&:hover": {
    borderColor: "$colors$gray9",
  },

  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 3px $colors$blue7`,
    borderColor: "$colors$gray9",
  },
});
