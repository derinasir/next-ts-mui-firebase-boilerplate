import type { AppProps } from 'next/app'
import Head from "next/head"

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#651fff",
        dark: "#a255ff",
        light: "#0100ca",
      },
      secondary: {
        main: "#ffc400",
        dark: "#fff64f",
        light: "#c79400",
      }
    }
  })
 
  return (
    <>
      <Head>
        <title>Next MUI Firebase</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
