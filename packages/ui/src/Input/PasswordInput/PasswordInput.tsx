import * as React from "react";
import { Button } from "../../Button/Button";
import { FlexDiv } from "../../FlexDiv";
import { Label } from "../../Label/Label";
import { Tooltip } from "../../Tooltip/Tooltip";
import { InputProps, StyledInput } from "../SharedStuff";
import { useRandomId } from "hooks";

import { ShowPasswordIcon } from "./ShowPasswordIcon";

export const PasswordInput = ({ label, required, id, error, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const innerId = useRandomId(id);

  return (
    <FlexDiv column gap05>
      {!!label && (
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
      )}

      <FlexDiv gap05>
        <StyledInput
          invalid={!!error}
          id={innerId}
          fullWidth
          required={required}
          type={showPassword ? "text" : "password"}
          {...props}
        />

        <Tooltip label={showPassword ? "Hide password" : "Show password"}>
          <Button onClick={() => setShowPassword(!showPassword)}>
            <FlexDiv>
              <ShowPasswordIcon open={showPassword} />
            </FlexDiv>
          </Button>
        </Tooltip>
      </FlexDiv>
    </FlexDiv>
  );
};
