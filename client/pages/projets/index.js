import styles from '../../styles/Projet.module.scss';

export default function Projets() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.projectLinks}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Messenger.
              </li>
              <li className={styles.li}>
                Local Drive.
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
};
