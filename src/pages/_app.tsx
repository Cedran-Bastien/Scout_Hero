import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter} from "next/router";
import {Typography} from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {

  return(
      <>
        <Component {...pageProps} />
      </>
  )
}
