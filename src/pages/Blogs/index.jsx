import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Blogs.module.scss";
import BlogsList from "@/components/BlogsList";
import HeroBreadCrumb from "@/components/HeroBreadCrumb";
import Maps from "@/components/Maps";
import NetworkAndPartners from "@/components/NetworkAndPartners";
import ServicesList from "@/components/ServicesList";

function Blogs() {
  const { t } = useTranslation();
  return (
    <div className={styles["wrapper"]}>
      <HeroBreadCrumb />
      <BlogsList />
      <Maps />
      <NetworkAndPartners />
      <div className={styles["quotation-wrapper"]}>
        <div className={`content-container ${styles["quotation-container"]}`}>
          <h3 className={styles["quota-title"]}>
            {t("common.quotation.title")}
          </h3>
          <p className={styles["quota-text"]}>{t("common.quotation.text")}</p>
          <Link to={"quotation"} className={styles["quota-btn"]}>
            {t("common.quotation.button")}
          </Link>
        </div>
      </div>
      <ServicesList />
    </div>
  );
}

export default Blogs;
