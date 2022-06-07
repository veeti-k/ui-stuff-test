import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { styled } from "../stitches.config";
import { Button } from "../Button/Button";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  ...Button,
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "$gray2",
  borderRadius: 8,
  border: "1px solid $gray6",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: "0.5rem",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem 0.7rem",
  color: "$hiContrast",
  cursor: "default",
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

export const SelectRoot = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
