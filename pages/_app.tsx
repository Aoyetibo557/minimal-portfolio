import { Layout } from "@/components/Layout";
import { ThemeProvider } from "@/components/Layout/constexts/themeconstext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
