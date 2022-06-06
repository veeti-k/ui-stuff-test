import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { PasswordInput, Button } from "ui";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
      <Button onClick={() => setTheme(nextTheme)}>Change theme</Button>

      <PasswordInput />
    </div>
  );
};

export default Home;
