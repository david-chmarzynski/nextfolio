import styles from '../../styles/Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Contactez-moi !</h1>
        <form action="" className={styles.form}>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Prénom Nom"/>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Email"/>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Message"/>
          <button type="submit" className={styles.button}>
            ENVOYER
          </button>
        </form>
      </div>
      <div className={styles.pin}>
        Contact.
      </div>
    </div>
  )
};