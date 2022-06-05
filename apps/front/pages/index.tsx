import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { Button, ButtonGroup } from "ui";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button onClick={() => setTheme(nextTheme)}>Change theme</Button>

      <ButtonGroup many>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
      </ButtonGroup>

      <Button outline>test</Button>
    </div>
  );
};

export default Home;
