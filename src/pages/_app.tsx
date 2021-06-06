import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend/latin.css";
import NextNprogress from "nextjs-progressbar";

import Layout from "components/layout";

import customTheme from "styles/customTheme";
import "styles/globals.css";
import "../styles/mockup.css";
import "../styles/PostPreview.css";
import { firebaseConfig } from "config/firebase";
import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
    firebase.analytics();
  }
  console.log(firebase.apps);

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <Layout>
        <NextNprogress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
