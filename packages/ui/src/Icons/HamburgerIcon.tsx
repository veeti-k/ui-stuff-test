import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const HamburgerIcon = styled(HamburgerMenuIcon, {
  transform: "scale(1.2)",
  ...SharedStyles,
});
