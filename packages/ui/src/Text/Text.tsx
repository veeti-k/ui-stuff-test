import { styled } from "../stitches.config";

export const Text = styled("span", {
  all: "unset",

  fontSize: "16px",
  color: "$hiContrast",

  variants: {
    red: {
      true: {
        color: "$tomato9",
      },
    },
  },
});
