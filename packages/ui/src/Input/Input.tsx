import * as React from "react";
import { useRandomId } from "hooks";
import { FlexDiv } from "../FlexDiv";
import { Label } from "../Label/Label";
import { InputProps, StyledInput } from "./SharedStuff";

export const Input = ({ label, required, id, error, ...props }: InputProps) => {
  const innerId = useRandomId(id);

  return (
    <FlexDiv column gap05 fullHeight>
      <FlexDiv justifyBetween alignCenter>
        <Label htmlFor={innerId} required={required}>
          {label}
        </Label>

        {!!error && (
          <Label htmlFor={innerId} red>
            {error}
          </Label>
        )}
      </FlexDiv>

      <StyledInput invalid={!!error} id={innerId} required={required} {...props} />
    </FlexDiv>
  );
};
