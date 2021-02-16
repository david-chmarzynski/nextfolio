import { useEffect, useRef } from 'react';
import styles from '../../styles/Projet.module.scss';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { handleProject, handleProjectReturn, fadeInMessenger, fadeInLocalDrive, backgroundSize, backgroundShadow } from '../../animations/Projet.animation';

// IMAGES
const messengerBackground = '/images/messenger-shot2.png';
const localDriveBackground = '/images/LD-big-size.png';

export default function Projets() {
  // REFS
  let messenger = useRef(null);
  let localDrive = useRef(null);
  let background = useRef(null);
  let description1 = useRef(null);
  let description2 = useRef(null);
  let title1 = useRef(null);
  let title2 = useRef(null);

  // ON MOUNT
  useEffect(() => {
    fadeInMessenger(title1);
    backgroundSize(messenger);
    backgroundShadow(messenger);
    fadeInLocalDrive(title2);
    backgroundSize(localDrive);
    backgroundShadow(localDrive);
  }, []);
  return (
    <>
      <div className={styles.background} ref={el => (background = el)}></div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.projectLinks}>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                <li className={styles.li} ref={el => (messenger = el)}>
                  <a 
                    href="https://messenger-new.herokuapp.com/"
                    target="_blank"
                    ref={el => (title1 = el)}
                    className={styles.li}
                    onMouseEnter={() => handleProject(messengerBackground, background, localDrive, description1)}
                    onMouseOut={() => handleProjectReturn(background, localDrive, description1)}
                  >
                    Messenger.
                  </a>
                </li>
                <span className={styles.description} ref={el => (description1 = el)}>
                    <h3 className={styles.h3}>Application de chat en temps réel.</h3>
                    <p className={styles.p}>
                      Véritable défi technique, alliant l'utilisation
                      de Node.js et des WebSockets pour l'échange de données
                      en temps réel, ainsi que React pour la reproduction de
                      l'interface très connue de Facebook Messenger.
                    </p>
                  </span>
                <li className={styles.li} ref={el => (localDrive = el)}>
                  <a
                    href=""
                    target="_blank"
                    ref={el => (title2 = el)}
                    className={styles.li}
                    onMouseEnter={() => handleProject(localDriveBackground, background, messenger, description2)}
                    onMouseOut={() => handleProjectReturn(background, messenger, description2)}
                  >
                    Local Drive.
                  </a>
                </li>
                <span className={styles.descriptionLD} ref={el => (description2 = el)}>
                    <h3 className={styles.h3LD}>Application Click&Collect.</h3>
                    <p className={styles.pLD}>
                      A destination des producteurs locaux au sein de la crise sanitaire,
                      Local Drive permet d'apporter la solution de "Drive" à des petites
                      entreprises n'ayant pas les moyens d'investir dans une telle plateforme.
                    </p>
                  </span>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
};
