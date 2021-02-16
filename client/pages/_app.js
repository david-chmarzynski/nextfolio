import '../styles/globals.css';

// IMPORT COMPONENTS
import Header from '../components/Header';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Menu />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
