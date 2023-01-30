import { GlobalStyle } from "@/styles/GlobalStyle"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"

type CustomAppProps = AppProps & {
  Component: AppProps["Component"] & {
    Layout?: (children: ReactNode) => ReactElement
  }
}

function MyApp({ Component, pageProps, router }: CustomAppProps) {
  return (
    <>
      <GlobalStyle />
      {Component.Layout ? (
        <Component.Layout {...pageProps}>
          <Component {...pageProps} key={router.route} />
        </Component.Layout>
      ) : (
        <Component {...pageProps} key={router.route} />
      )}
    </>
  )
}

export default MyApp
