import React, { useEffect } from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@/styles";
import Footer from "@/components/Footer/index";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const pageProps = await App.getInitialProps(appContext);
  return { ...pageProps };
};

export default MyApp;
