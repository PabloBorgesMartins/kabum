import { GlobalStyle } from "../styles/global";
import { Header } from '../components/Header';
import AppProvider from "../hooks";
import { startServer } from '../services/fakeBackend';

if (process.env.NODE_ENV === "development") {
  startServer({ environment: "development" });
}

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
