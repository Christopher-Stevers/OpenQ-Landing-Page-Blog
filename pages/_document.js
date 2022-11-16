import { Html, Head, Main, NextScript } from "next/document";
import { tw } from 'twind';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@300;400;500;600;700&family=Ubuntu+Mono&display=swap" rel="stylesheet" />
      </Head>
      <body className={tw(`overflow-x-hidden antialiased`)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
