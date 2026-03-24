import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ServiceLocation.module.scss";

function ServiceLocation({ service }) {
  const { t } = useTranslation();
  const serviceId = service?.id || "4";
  const location = t(`serviceDetail.services.${serviceId}.location`, {
    returnObjects: true,
  });

  const sectionData =
    typeof location === "string"
      ? {
          title: "",
          address: "",
          description: "",
          image: "",
        }
      : location;

  return (
    <section className={styles.wrapper}>
      <div className={`content-container ${styles.container}`}>
        <div className={styles.imageWrap}>
          <img src={sectionData.image} alt={sectionData.title} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{sectionData.title}</h2>
          <p className={styles.address}>{sectionData.address}</p>
          <p className={styles.description}>{sectionData.description}</p>
          <Link to="locations" className={styles.actionBtn}>
            {t("serviceDetail.actions.exploreLocation")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceLocation;
