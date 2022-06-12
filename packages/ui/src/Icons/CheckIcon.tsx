import { CheckIcon as RadixCheckIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const CheckIcon = styled(RadixCheckIcon, {
  transform: "scale(1.2)",
  ...SharedStyles,
});
