import Link from 'next/link';
import styles from '../styles/Menu.module.scss';
import { useRef, useEffect } from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { staggerRevealClose, staggerReveal, handleHover, handleHoverExit } from '../animations/Menu.animation';

export default function Menu({ state, setState }) {
  // REFS
  let menulayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  // ON MOUNT
  useEffect(() => {
    if(state.deployed === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menulayer, { duration: 1, css: { display: "none" } });
    } else if(state.deployed === true) {
      gsap.to(menulayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
    }
  }, [state]);

  return (
    <div ref={el => (menulayer = el)} className={styles.menu}>
      <div ref={el => (reveal1 = el)} className={styles.secondaryBackground}></div>
      <div ref={el => (reveal2 = el)} className={styles.menuLayer}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.menuLinks}>
              <nav className={styles.nav}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <Link href="/about">
                      <a
                        className={styles.a}
                        ref={el => (line1 = el)}
                        onClick={() => setState({ deployed: false, clicked: true, menu: "About"})}
                        onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}
                      >
                        A propos.
                      </a>
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="/contact">
                      <a
                        className={styles.a}
                        ref={el => (line2 = el)}
                        onClick={() => setState({ deployed: false, clicked: true, menu: "Contact"})}
                        onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}
                      >
                        Contact.
                      </a>
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="/projets">
                      <a
                        className={styles.a}
                        ref={el => (line3 = el)}
                        onClick={() => setState({ deployed: false, clicked: true, menu: "Projets"})}
                        onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}
                      >
                        Projets.
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <footer className={styles.footer}>
            <GithubOutlined />
            <LinkedinOutlined />
          </footer>
        </div>
      </div>
    </div>
  )
};