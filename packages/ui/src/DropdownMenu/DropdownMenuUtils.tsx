import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { DropdownMenuItemIndicator, StyledCheckboxItem } from "./DropdownMenu";

export const DropdownMenuCheckboxItem = ({
  children,
  ...rest
}: React.ComponentProps<typeof StyledCheckboxItem>) => (
  <StyledCheckboxItem {...rest}>
    <DropdownMenuItemIndicator>
      <CheckIcon />
    </DropdownMenuItemIndicator>

    {children}
  </StyledCheckboxItem>
);
