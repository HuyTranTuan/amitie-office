import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ServiceDetail.module.scss";
import HeroBreadCrumb from "@/components/HeroBreadCrumb";
import NetworkAndPartners from "@/components/NetworkAndPartners";
import services from "@/data/services.json";
import LocationsList from "@/pages/Locations/components/LocationsList";
import Strength from "@/components/Strength";
import ServiceInfo from "./components/ServiceInfo";
import ServiceBenefitsAmenities from "./components/ServiceBenefitsAmenities";
import ServiceLocation from "./components/ServiceLocation";
import ServicePrice from "./components/ServicePrice";

function ServiceDetail() {
  const { t } = useTranslation();
  const servicePath = useLocation();
  const service = services.filter(
    (service) => service.path === servicePath.pathname,
  )[0];

  return (
    <div className={styles["wrapper"]}>
      <HeroBreadCrumb />
      <ServiceInfo service={service} />
      <ServiceBenefitsAmenities service={service} />
      <ServiceLocation service={service} />
      <ServicePrice service={service} />
      <LocationsList />
      <Strength />
      <NetworkAndPartners />
      <div className={styles["quotation-wrapper"]}>
        <div className={`content-container ${styles["quotation-container"]}`}>
          <h3 className={styles["quota-title"]}>{t("common.quotation.title")}</h3>
          <p className={styles["quota-text"]}>
            {t("common.quotation.text")}
          </p>
          <Link to={"quotation"} className={styles["quota-btn"]}>
            {t("common.quotation.button")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
