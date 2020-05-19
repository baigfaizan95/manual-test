import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Webfont from 'webfontloader';
import theme from '@/styles';

Webfont.load({
  google: {
    families: ['Open+Sans&display=swap', 'Montserrat:700&display=swap'],
  },
});

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Head>
          <title>Manual</title>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </CssBaseline>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const pageProps = await App.getInitialProps(appContext);
  return { ...pageProps };
};

export default MyApp;
