import "../styles/index.scss";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
