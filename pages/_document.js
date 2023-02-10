import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          strategy="afterInteractive"
          src="https://asset-tidycal.b-cdn.net//js/embed.js"
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
