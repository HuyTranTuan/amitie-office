import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ServicePrice.module.scss";

function ServicePrice({ service }) {
  const { t } = useTranslation();
  const serviceId = service?.id || "4";
  const pricing = t(`serviceDetail.services.${serviceId}.pricing`, {
    returnObjects: true,
  });

  const plans = Array.isArray(pricing) ? pricing : [];

  return (
    <section className={styles.wrapper}>
      <div className={`content-container ${styles.container}`}>
        <p className={styles.subTitle}>{t("serviceDetail.pricing.subTitle")}</p>
        <h2 className={styles.title}>{t("serviceDetail.pricing.title")}</h2>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <article className={styles.card} key={plan.id}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>
              <ul className={styles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link to="quotation" className={styles.actionBtn}>
                {t("serviceDetail.actions.contactUs")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePrice;
