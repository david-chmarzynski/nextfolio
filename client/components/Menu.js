import Link from 'next/link';
import styles from '../styles/Menu.module.scss';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.secondaryBackground}></div>
      <div className={styles.menuLayer}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.menuLinks}>
              <nav className={styles.nav}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <Link href="/about">
                      <a
                        className={styles.a}
                      >
                        A propos.
                      </a>
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="/contact">
                    <a
                      className={styles.a}
                    >
                      Contact.
                    </a>
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="/projets">
                      <a
                        className={styles.a}
                      >
                        Projets.
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};