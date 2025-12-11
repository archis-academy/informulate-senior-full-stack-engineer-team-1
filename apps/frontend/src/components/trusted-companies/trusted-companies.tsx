import styles from "./trusted-companies.module.scss";
import { trustedCompanyLogos } from "./trusted-companies.fixtures";

function TrustedCompanies() {
  return (
    <section
      className={styles.section}
      aria-labelledby="trusted-companies-heading"
    >
      <div className={styles.content}>
        <h2 id="trusted-companies-heading" className={styles.title}>
          6.3k trusted companies
        </h2>
        <p className={styles.description}>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>
      </div>

      <div className={styles.logosGrid} aria-label="Trusted company logos">
        {trustedCompanyLogos.map((logo) => (
          <div key={logo.id} className={styles.logoCard}>
            <span className={styles.logoText}>{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanies;
