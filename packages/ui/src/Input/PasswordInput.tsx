import * as React from "react";
import { Button } from "../Button/Button";
import { FlexDiv } from "../FlexDiv";
import { Tooltip } from "../Tooltip/Tooltip";
import { Input } from "./Input";
import { ShowPasswordIcon } from "./ShowPasswordIcon";

export const PasswordInput = ({ ...props }: React.ComponentProps<typeof Input>) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FlexDiv gap05>
      <Input type={showPassword ? "text" : "password"} {...props} />

      <Tooltip label={showPassword ? "Hide password" : "Show password"}>
        <Button onClick={() => setShowPassword(!showPassword)}>
          <FlexDiv>
            <ShowPasswordIcon open={showPassword} />
          </FlexDiv>
        </Button>
      </Tooltip>
    </FlexDiv>
  );
};
