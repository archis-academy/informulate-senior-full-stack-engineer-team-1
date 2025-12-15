import styles from "./trusted-companies.module.scss";
import type { TrustedCompany } from "./trusted-companies.fixtures";
import React from "react";

interface TrustedCompaniesProps {
  title: string;
  description: string;
  logos: TrustedCompany[];
}

function TrustedCompanies({ title, description, logos }: TrustedCompaniesProps) {
  return (
    <section className={styles.section} aria-labelledby="trusted-companies-heading">
      <div className={styles.content}>
        <h2 id="trusted-companies-heading" className={styles.title}>
          {title}
        </h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.logosGrid} aria-label="Trusted company logos">
        {logos.map((logo) => (
          <div key={logo.id} className={styles.logoCard}>
            <img
              src={logo.imageUrl}
              alt={logo.alt}
              className={styles.logoImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanies;
