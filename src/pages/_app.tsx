import { GlobalStyle } from "../styles/global";
import { Header } from '../components/Header';
import AppProvider from "../hooks";

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
