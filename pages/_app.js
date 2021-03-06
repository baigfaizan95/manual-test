import React from "react";
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

if (typeof window !== "undefined") {
  const WebFont = require("webfontloader");
  WebFont.load({
    google: {
      families: ["Montserrat:700", "Open+Sans&display=swap"],
    },
  });
}

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles();

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

export default MyApp;
