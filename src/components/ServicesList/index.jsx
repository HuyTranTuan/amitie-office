import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ServicesList.module.scss";
import services from "@/data/services.json";

function ServicesList() {
  const { t } = useTranslation();
  return (
    <div className={styles["wrapper"]}>
      <div className={`content-container ${styles.container}`}>
        {services.map((item) => {
          return (
            <div className={styles["card-wrapper"]} key={item.id}>
              <div className={styles["card-img"]}>
                <img
                  src={`${import.meta.env.BASE_URL}${item.imgSrc}`}
                  alt={item.title}
                />
              </div>
              <div className={styles["card-content"]}>
                <div className={styles["card-header"]}>
                  <h3 className={styles["title"]}>{item.title}</h3>
                  <p className={styles["desc"]}>{item.desc}</p>
                </div>
                <div className={styles["card-link"]}>
                  <Link to={item.path}>{t("common.services.learnMore")}</Link>
                </div>
              </div>
              <div className={styles["card-icon"]}>
                <img
                  src={`${import.meta.env.BASE_URL}${item.svg}`}
                  alt={item.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesList;
