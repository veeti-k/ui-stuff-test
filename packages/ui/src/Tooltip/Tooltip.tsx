import * as React from "react";
import { keyframes, styled } from "../stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface Props {
  children: React.ReactNode;
  label: string;
}

export const Tooltip = ({ children, label }: Props) => (
  <TooltipPrimitive.Root delayDuration={0}>
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

    <StyledContent sideOffset={5}>{label}</StyledContent>
  </TooltipPrimitive.Root>
);

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

export const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: "0.5rem 0.8rem",
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: "$whiteA5",
  color: "$hiContrast",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",

  "@motionOk": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});
