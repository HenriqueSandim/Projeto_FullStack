import type { AppProps } from "next/app";
import "../styles/resetStyles.css";
import "../styles/globalStyles.css";
import { ThemeProvider } from "@emotion/react";
import Providers from "../context/providers";
import theme from "@/styles/customMaterialUIThemes";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

import style from "@/styles/bodyStyles.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <div className={style.body_class}>
          <HeaderComponent />
          <Component {...pageProps} />
          <FooterComponent />
        </div>
      </ThemeProvider>
    </Providers>
  );
}
