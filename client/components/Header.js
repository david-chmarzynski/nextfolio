import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { CloseOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

export default function Header({ state, setState }) {
  useEffect(() => {
    if(window.location.pathname !== "/") {
      setState({ deployed: false, clicked: null, menu: "Closed"})
    }
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerHeader}>
            <div className={styles.logo}>
              <Link href="/">
                <a
                  className={styles.a}
                  onClick={() => setState({ deployed: true, clicked: true, menu: "Home"})}
                >
                  DAVID CHMARZYNSKI
                </a>
              </Link>
              <span className={styles.span}>FR</span>
            </div>
            <div className={styles.close}>
              <Link href="/">
                <a
                  className={styles.a}
                  onClick={() => setState({ deployed: true, clicked: true, menu: "Home"})}
                >
                  <CloseOutlined className={styles.svg} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};