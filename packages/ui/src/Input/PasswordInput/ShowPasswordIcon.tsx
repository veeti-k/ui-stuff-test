import * as React from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";

interface Props {
  open: boolean;
}

export const ShowPasswordIcon = ({ open }: Props) => (open ? <EyeNoneIcon /> : <EyeOpenIcon />);
