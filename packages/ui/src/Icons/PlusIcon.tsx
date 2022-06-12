import * as React from "react";
import { PlusIcon as RadixPlusIcon } from "@radix-ui/react-icons";
import { styled } from "../stitches.config";
import { SharedStyles } from "./Styles";

export const PlusIcon = styled(RadixPlusIcon, { ...SharedStyles });
