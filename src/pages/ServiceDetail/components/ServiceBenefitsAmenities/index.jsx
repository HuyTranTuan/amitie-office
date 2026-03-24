import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faImage,
  faFileSignature,
  faPrint,
  faUsersRectangle,
  faBuildingUser,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import styles from "./ServiceBenefitsAmenities.module.scss";

const benefitIcons = {
  handling: faBoxArchive,
  logo: faImage,
  registration: faFileSignature,
  printing: faPrint,
  meeting: faUsersRectangle,
  coworking: faBuildingUser,
};

function ServiceBenefitsAmenities({ service }) {
  const { t } = useTranslation();
  const serviceId = service?.id || "4";
  const benefits = t(`serviceDetail.services.${serviceId}.benefits`, {
    returnObjects: true,
  });

  const list = Array.isArray(benefits) ? benefits : [];

  return (
    <section className={styles.wrapper}>
      <div className={`content-container ${styles.container}`}>
        <h2 className={styles.heading}>{t("serviceDetail.benefits.title")}</h2>
        <div className={styles.grid}>
          {list.map((item) => (
            <article className={styles.card} key={item.id}>
              <div className={styles.iconWrap}>
                <FontAwesomeIcon icon={benefitIcons[item.icon] || faBoxArchive} />
              </div>
              <p className={styles.cardTitle}>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceBenefitsAmenities;
