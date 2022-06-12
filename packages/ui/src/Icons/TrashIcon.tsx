import { TrashIcon as RadixTrashIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const TrashIcon = styled(RadixTrashIcon, {
  transform: "scale(1.4)",
  ...SharedStyles,
});
