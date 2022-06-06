import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import {
  SelectContent,
  SelectIcon,
  SelectRoot,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "./Select.styles";
import { FlexDiv } from "../FlexDiv";

interface Props {
  children: React.ReactNode;
}

export const Select = ({ children }: Props) => (
  <SelectRoot defaultValue="test">
    <SelectTrigger>
      <FlexDiv gap05>
        <SelectValue />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </FlexDiv>
    </SelectTrigger>

    <SelectContent>
      <SelectScrollUpButton>
        <ChevronUpIcon />
      </SelectScrollUpButton>

      <SelectViewport>{children}</SelectViewport>

      <SelectScrollUpButton>
        <ChevronUpIcon />
      </SelectScrollUpButton>
    </SelectContent>
  </SelectRoot>
);
