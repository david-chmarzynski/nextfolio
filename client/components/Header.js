import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { CloseOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header({ state, setState }) {
  let router = useRouter();
  useEffect(() => {
    if(router.pathname !== "/") {
      setState({ deployed: false, clicked: null, menu: "Closed"})
    }
  }, [router]);
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
            {!state.deployed && (
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
            )}
          </div>
        </div>
      </div>
    </header>
  )
};