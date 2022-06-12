import { styled } from "../stitches.config";

export const StyledCard = styled("div", {
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  borderRadius: "6px",
  position: "relative",
  transition: "$default",

  background: "$gray3",

  variants: {
    variant: {
      outline: {
        border: "1px solid $gray6",
      },

      error: {
        background: "$tomato6",
      },
    },
  },

  defaultVariants: {
    variant: "outline",
  },
});

export const StyledCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.7rem",
  height: "100%",

  "@bp2": {
    gap: "0.7rem",
  },

  "@bp3": {
    gap: "0.9rem",
    padding: "0.9rem",
  },
});
