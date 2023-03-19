import Layout from "@/components/layouts";
import { MediaQueryProvider } from "@/components/provider/MediaQueryProvider";
import createEmotionCache from "@/createEmotionCache";
import theme from "@/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MediaQueryProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MediaQueryProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
