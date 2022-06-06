import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import {
  SelectContent,
  SelectIcon,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "./Select.styles";
import { FlexDiv } from "../FlexDiv";

interface Props {
  children: React.ReactNode;
  defaultValue?: string;
}

export const Select = ({ children, defaultValue }: Props) => (
  <SelectRoot defaultValue={defaultValue}>
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

      <SelectScrollDownButton>
        <ChevronDownIcon />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectRoot>
);
