import { useEffect, useRef } from 'react';
import styles from '../../styles/Contact.module.scss';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { fadeInTitle, fadeInput1, fadeInput2, fadeInput3, fadeInButton, backgroundPin, shadowPin } from '../../animations/Contact.animation';

export default function Contact() {
  // REFS
  let title = useRef(null);
  let input1 = useRef(null);
  let input2 = useRef(null);
  let input3 = useRef(null);
  let button = useRef(null);
  let pin = useRef(null);

  // ON MOUNT
  useEffect(() => {
    fadeInTitle(title);
    fadeInput1(input1);
    fadeInput2(input2);
    fadeInput3(input3);
    fadeInButton(button);
    backgroundPin(pin);
    shadowPin(pin);
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <h1 className={styles.title} ref={el => (title = el)}>Contactez-moi !</h1>
        <form action="" className={styles.form}>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Prénom Nom" ref={el => (input1 = el)}/>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Email"  ref={el => (input2 = el)}/>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Message"  ref={el => (input3 = el)}/>
          <button type="submit" className={styles.button} ref={el => (button = el)}>
            ENVOYER
          </button>
        </form>
      </div>
      <div className={styles.pin} ref={el => (pin = el)}>
        Contact.
      </div>
    </div>
  )
};