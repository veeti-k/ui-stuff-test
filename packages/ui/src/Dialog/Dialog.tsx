import * as React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./Dialog.styles";
import { FlexDiv } from "../FlexDiv";
import { Button } from "../Button/Button";

interface DialogProps {
  title: string;
  description?: string;
  trigger: React.ReactNode;

  children: React.ReactNode;
}

export const Dialog = ({ title, description, trigger, children }: DialogProps) => (
  <DialogRoot>
    <DialogTrigger asChild>{trigger}</DialogTrigger>

    <DialogContent>
      <FlexDiv column>
        <FlexDiv justifyBetween alignCenter>
          <DialogTitle>{title}</DialogTitle>

          <DialogClose asChild>
            <Button subtle>
              <FlexDiv>
                <Cross2Icon />
              </FlexDiv>
            </Button>
          </DialogClose>
        </FlexDiv>

        {!!description && <DialogDescription>{description}</DialogDescription>}

        {children}
      </FlexDiv>
    </DialogContent>
  </DialogRoot>
);
