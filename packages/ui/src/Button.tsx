import { styled } from "./stitches.config";

export const Button = styled("button", {
  all: "unset",
  appearance: "none",

  borderRadius: "6px",
  transition: "box-shadow 0.2s ease-in-out, background-color 0.1s ease-in-out",
  padding: "0.7rem",

  "&:hover": {
    backgroundColor: "$green10",
  },

  "&:focus-visible": {
    outline: "none",
    boxShadow: `0 0 0 3px $colors$blueA8`,
  },
});
