import { ChevronUpIcon as RadixChevronUp } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const ChevronUpIcon = styled(RadixChevronUp, {
  transform: "scale(1.2)",
  ...SharedStyles,
});
