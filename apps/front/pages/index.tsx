import type { NextPage } from "next";
import { useTheme } from "next-themes";
import {
  Button,
  Input,
  PasswordInput,
  Dialog,
  Option,
  AlertDialog,
  Select,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuRightSlot,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "ui";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  const darkTheme = theme === "dark";

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem", flexDirection: "column" }}>
      <Button onClick={() => setTheme(nextTheme)}>Change theme</Button>

      <Input required label="Password" error={"test"} />

      <PasswordInput required label="Password" />

      <Dialog title="Title" trigger={<Button>Open dialog</Button>}>
        <Input required label="Password" error={"test"} />
        <Input required label="Password" error={"test"} />
      </Dialog>

      <AlertDialog
        action={<Button red>Action</Button>}
        cancel={<Button>Cancel</Button>}
        title="Title"
        trigger={<Button>Open alert dialog</Button>}
      />

      <div>
        <Select defaultValue={"test" + 1}>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <Option key={i} value={"test" + i}>
                test-{i}
              </Option>
            ))}
        </Select>
      </div>

      <div>
        <DropdownMenu trigger={<Button>Open dropdown menu</Button>}>
          <DropdownMenuCheckboxItem checked={darkTheme}>
            Tumma tila <DropdownMenuRightSlot>CTRL+J</DropdownMenuRightSlot>
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Kirjaudu ulos</DropdownMenuItem>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Home;
