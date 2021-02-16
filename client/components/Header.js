import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerHeader}>
            <div className={styles.logo}>
              <Link href="/">
                <a
                  className={styles.a}
                >
                  DAVID CHMARZYNSKI
                </a>
              </Link>
            </div>
            <div className={styles.close}>
              <Link href="/">
                <a>
                  Back
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};