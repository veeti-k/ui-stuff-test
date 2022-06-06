import * as React from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";

interface Props {
  open: boolean;
}

export const ShowPasswordIcon = ({ open }: Props) => (open ? <EyeNoneIcon /> : <EyeOpenIcon />);
