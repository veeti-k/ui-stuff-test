import * as React from "react";
import * as RadixLabel from "@radix-ui/react-label";
import { styled } from "../stitches.config";
import { Text } from "../Text/Text";

const StyledLabel = styled(RadixLabel.Root, {
  all: "unset",
  fontSize: "14px",
  color: "$hiContrast",

  transition: "$default",

  variants: {
    red: {
      true: {
        color: "$tomato9",
      },
    },
  },
});

interface Props extends React.ComponentProps<typeof StyledLabel> {
  required?: boolean;
  children: React.ReactNode;
}

export const Label = ({ children, required, ...props }: Props) => (
  <StyledLabel {...props}>
    {children} {!!required && <Text red>*</Text>}
  </StyledLabel>
);
