import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";

/* Library */
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

/* Components */
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* Styles */
import theme from "@/styles";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      flex: "1",
      height: "100%",
    },
  };
});

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <div className={classes.root}>
      <Head>
        <title>Manual: Men&apos;s Healthcare. Made easy. More than pharmacy</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <main className={classes.main}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const pageProps = await App.getInitialProps(appContext);
  return { ...pageProps };
};

export default MyApp;
