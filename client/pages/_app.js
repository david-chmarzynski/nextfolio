import '../styles/globals.css';
import { useState } from 'react';

// IMPORT COMPONENTS
import Header from '../components/Header';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  // MENU STATE
  const [state, setState] = useState({
    deployed: true,
    clicked: null,
    menu: "Home"
  });
  return (
  <>
    <Header state={state} setState={setState} />
    <Menu state={state} setState={setState} />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
