import { ChevronDownIcon } from "../Icons/ChevronDownIcon";
import { ChevronUpIcon } from "../Icons/ChevronUpIcon";
import { Button } from "./Button";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ChevronButton = ({ open, setOpen }: Props) => (
  <Button icon variant="subtle" onClick={() => setOpen(!open)}>
    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
  </Button>
);
