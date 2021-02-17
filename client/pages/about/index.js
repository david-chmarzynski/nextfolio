import styles from '../../styles/About.module.scss';

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
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.backgroundRed}></div>
        <h2 className={styles.title}>Développeur web <br/>Fullstack</h2>
        <div className={styles.skills}>
          <div className={styles.bio}>
            <h3 className={styles.h3}>Bio</h3>
            <p className={styles.p}>
              Je suis développeur web, spécialisé dans les technologies liées au Javascript
              alliants efficacité, productivité, et puissance. <br/>
              Basé à <span className={styles.city}>Avignon</span>, je suis #OpenToWork.
            </p>
          </div>
          <div className={styles.stack}>
            <h3 className={styles.h3}>Stack Technique</h3>
            <div className={styles.stackList}>
              <ul className={styles.languages}>
                <h4 className={styles.h4}>Langages :</h4>
                {languages.map(el => (
                  <li>{el.name}</li>
                ))}
              </ul>
              <ul className={styles.frameworks}>
                <h4 className={styles.h4}>Frameworks :</h4>
                {frameworks.map(el => (
                  <li>{el.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
