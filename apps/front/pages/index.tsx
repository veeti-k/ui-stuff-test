import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { Button } from "ui";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button onClick={() => setTheme(nextTheme)}>Change theme</Button>
      <Button>Test</Button>
    </div>
  );
};

export default Home;
