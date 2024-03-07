import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavBar from "../components/Navbar";
import getTheme from "../config-theme";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const selectTheme = useMemo(() => {
    let theme = createTheme(getTheme(isDarkMode ? "dark" : "light"));
    return theme;
  }, [isDarkMode]);

  return (
    <>
      <ThemeProvider theme={selectTheme}>
        <CssBaseline />
        <Layout>
          <NavBar />
          <Box sx={{ pl: 4, pr: 4 }}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}
