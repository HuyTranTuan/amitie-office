import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ServiceInfo.module.scss";

function ServiceInfo({ service }) {
  const { t } = useTranslation();
  const serviceId = service?.id || "4";
  const info = t(`serviceDetail.services.${serviceId}.info`, {
    returnObjects: true,
  });

  const sectionData =
    typeof info === "string"
      ? {
          title: service?.title || "",
          description: service?.desc || "",
          idealForLabel: t("serviceDetail.labels.idealFor"),
          idealForValue: "",
          minimumTermLabel: t("serviceDetail.labels.minimumTerm"),
          minimumTermValue: "",
          image: service?.imgSrc || "",
        }
      : info;

  return (
    <section className={styles.wrapper}>
      <div className={`content-container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>{sectionData.title}</h2>
          <p className={styles.description}>{sectionData.description}</p>
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>{sectionData.idealForLabel}</p>
              <p className={styles.metaValue}>{sectionData.idealForValue}</p>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>{sectionData.minimumTermLabel}</p>
              <p className={styles.metaValue}>{sectionData.minimumTermValue}</p>
            </div>
          </div>
          <div className={styles.actions}>
            <Link to="quotation" className={styles.primaryBtn}>
              {t("serviceDetail.actions.contactUs")}
            </Link>
            <Link to="quotation" className={styles.secondaryBtn}>
              {t("serviceDetail.actions.getQuotation")}
            </Link>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            src={`${import.meta.env.BASE_URL}${sectionData.image}`}
            alt={sectionData.title}
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceInfo;
