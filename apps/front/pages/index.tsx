import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { Button, Input, PasswordInput } from "ui";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem", flexDirection: "column" }}>
      <Button onClick={() => setTheme(nextTheme)}>Change theme</Button>

      <Input required label="Password" error={"test"} />

      <PasswordInput required label="Password" />
    </div>
  );
};

export default Home;
