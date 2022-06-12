import { ChevronDownIcon as RadixChevronDown } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const ChevronDownIcon = styled(RadixChevronDown, {
  transform: "scale(1.2)",
  ...SharedStyles,
});
