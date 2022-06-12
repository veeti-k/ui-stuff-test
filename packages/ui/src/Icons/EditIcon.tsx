import { Pencil2Icon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const EditIcon = styled(Pencil2Icon, {
  transform: "scale(1.2)",
  paddingRight: "1px",
  paddingBottom: "1px",
  ...SharedStyles,
});
