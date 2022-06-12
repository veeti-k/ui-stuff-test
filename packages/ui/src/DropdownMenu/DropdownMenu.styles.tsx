import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { keyframes, styled } from "../stitches.config";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  overflow: "hidden",
  backgroundColor: "$gray2",
  borderRadius: 8,
  border: "1px solid $gray6",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
  padding: "0.5rem",
  fontSize: 14,

  "@motionOk": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const itemStyles = {
  all: "unset",
  color: "$hiContrast",
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  padding: "0.6rem 0.7rem",
  paddingLeft: 27,
  userSelect: "none",
  position: "relative",

  "&:focus": {
    backgroundColor: "$gray5",
  },

  "&[data-state=active]": {
    backgroundColor: "$gray6",
    pointerEvents: "none",
  },

  "&[data-disabled]": {
    color: "$gray6",
    pointerEvents: "none",
  },
};

export const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
export const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });

export const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: "$hiContrast",
});

export const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 27,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "$gray6",
  margin: 5,
});

export const StyledRightSlot = styled("div", {
  fontSize: 12,
  marginLeft: "auto",
  paddingLeft: 20,
  color: "$gray8",
  "[data-disabled] &": { color: "$gray6" },
});
