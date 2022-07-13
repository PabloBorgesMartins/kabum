import { GlobalStyle } from "../styles/global";
import { Header } from '../components/Header';
import AppProvider from "../hooks";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  )
}

export default MyApp
