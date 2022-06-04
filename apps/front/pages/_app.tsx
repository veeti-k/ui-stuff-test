import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { darkTheme } from "ui";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider
    defaultTheme="system"
    enableColorScheme={false}
    attribute="class"
    value={{ light: "light", dark: darkTheme.className }}
  >
    <Component {...pageProps} />
  </ThemeProvider>
);

export default CustomApp;
