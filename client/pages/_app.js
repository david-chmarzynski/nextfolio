import '../styles/globals.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
 
// IMPORT COMPONENTS
import Header from '../components/Header';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  // ROUTER STATE
  let router = useRouter().pathname;

  // MENU STATE
  const [state, setState] = useState({
    deployed: (router === "/"),
    clicked: null,
    menu: (router === "/") ? "Home" : "Closed"
  });

  return (
  <>
    <Header state={state} setState={setState} />
    {/* {router === "/" && (
      <Menu state={state} setState={setState} />
    )} */}
    <Menu state={state} setState={setState} router={router} />
    <Component {...pageProps}  state={state} setState={setState}/>
  </>
  )
}

export default MyApp
