import "@/src/styles/globals.css";
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;