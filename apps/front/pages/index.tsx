import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { Button, Input, PasswordInput, Dialog, Option } from "ui";
import { Select } from "ui";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem", flexDirection: "column" }}>
      <Button onClick={() => setTheme(nextTheme)}>Change theme</Button>

      <Input required label="Password" error={"test"} />

      <PasswordInput required label="Password" />

      <Dialog title="Title" trigger={<Button>Open dialog</Button>}>
        <Input required label="Password" error={"test"} />
        <Input required label="Password" error={"test"} />
      </Dialog>

      <div>
        <Select>
          <Option value="test">test</Option>
        </Select>
      </div>
    </div>
  );
};

export default Home;
