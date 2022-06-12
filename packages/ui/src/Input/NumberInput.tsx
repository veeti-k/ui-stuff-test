import * as React from "react";
import { useIsomorphicEffect, useRandomId } from "hooks";
import { useState } from "react";
import { FlexDiv } from "../FlexDiv";
import { Label } from "../Label/Label";
import { InputProps, StyledInput } from "./SharedStuff";

interface Props extends Omit<InputProps, "onChange" | "value" | "type"> {
  onChange?: (value: number) => void;
  value: number;
}

export const NumberInput = ({ label, required, id, error, value, onChange, ...props }: Props) => {
  const [innerValue, setInnerValue] = useState(Number(value) || Number(props.defaultValue) || null);
  const innerId = useRandomId(id);

  useIsomorphicEffect(() => {
    setInnerValue(Number(value) || null);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInnerValue(newValue);
    onChange?.(newValue);
  };

  return (
    <FlexDiv column gap05 fullHeight>
      <FlexDiv justifyBetween alignCenter>
        {!!label && (
          <Label htmlFor={innerId} required={required}>
            {label}
          </Label>
        )}

        {!!error && (
          <Label htmlFor={innerId} red>
            {error}
          </Label>
        )}
      </FlexDiv>

      <StyledInput
        type="number"
        value={String(innerValue)}
        onChange={handleChange}
        invalid={!!error}
        id={innerId}
        required={required}
        {...props}
      />
    </FlexDiv>
  );
};
