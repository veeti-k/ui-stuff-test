import * as React from "react";
import { styled } from "../stitches.config";
import {
  itemStyles,
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledRightSlot,
  StyledSeparator,
} from "./DropdownMenu.styles";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface Props extends React.ComponentProps<typeof DropdownMenuRoot> {
  trigger: React.ReactNode;
}

export const DropdownMenu = ({ trigger, children, ...rest }: Props) => (
  <DropdownMenuRoot {...rest}>
    <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

    <DropdownMenuContent sideOffset={-10}>{children}</DropdownMenuContent>
  </DropdownMenuRoot>
);

export const DropdownMenuRightSlot = StyledRightSlot;
export const DropdownMenuSeparator = StyledSeparator;
export const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
