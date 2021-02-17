import { useEffect, useRef } from 'react';
import styles from '../../styles/About.module.scss';

// IMPORT ANIMATIONS
import { fadeInAbout, timeLineStack } from '../../animations/About.animation';

const languages = [
  { name: "- HTML 5" },
  { name: "- CSS 3" },
  { name: "- JavaScript" }
];

const frameworks = [
  { name: "- React" },
  { name: "- Node.js" },
  { name: "- Next.js" },
]

export default function About() {
  let title = useRef(null);
  let bio = useRef(null);
  let description = useRef(null);
  let stack = useRef(null);
  let langList = useRef(null);
  let frameList = useRef(null);
  let langTitle = useRef(null);
  let frameTitle = useRef(null);

  // ON MOUNT
  useEffect(() => {
    fadeInAbout(title);
    timeLineStack(bio, description, stack, langList, frameList, langTitle, frameTitle);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.backgroundRed}></div>
        <h2 className={styles.title} ref={el => (title = el)}>Développeur web <br/>Fullstack</h2>
        <div className={styles.skills}>
          <div className={styles.bio}>
            <h3 className={styles.h3} ref={el => (bio = el)}>Bio</h3>
            <p className={styles.p} ref={el => (description = el)}>
              Je suis développeur web, spécialisé dans les technologies liées au Javascript
              alliants efficacité, productivité, et puissance. <br/>
              Basé à <span className={styles.city}>Avignon</span>, je suis #OpenToWork.
            </p>
          </div>
          <div className={styles.stack}>
            <h3 className={styles.h3} ref={el => (stack = el)}>Stack Technique</h3>
            <div className={styles.stackList}>
              <ul className={styles.languages} >
                <h4 className={styles.h4} ref={el => (langTitle = el)}>Langages :</h4>
                <div ref={el => (langList = el)}>
                {languages.map(el => (
                  <li key={el.name}>{el.name}</li>
                ))}
                </div>
              </ul>
              <ul className={styles.frameworks}>
                <h4 className={styles.h4} ref={el => (frameTitle = el)}>Frameworks :</h4>
                <div ref={el => (frameList = el)}>
                {frameworks.map(el => (
                  <li key={el.name}>{el.name}</li>
                ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
