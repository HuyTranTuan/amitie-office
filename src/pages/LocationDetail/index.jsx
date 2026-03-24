import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./LocationDetail.module.scss";
import HeroBreadCrumb from "@/components/HeroBreadCrumb";
import LocationInfo from "./components/LocationInfo";
import Maps from "@/components/Maps";
import locations from "@/data/locations.json"
import NetworkAndPartners from "@/components/NetworkAndPartners";
import Services from "@/components/ServicesList";
import LocationChoice from "@/pages/LocationDetail/components/LocationChoice";
import LocationOurSpace from "./components/LocationOurSpace";

function LocationDetail(){
    const { t } = useTranslation();
    const locationPath = useLocation();
    const location = locations.filter((location) => location.slug === locationPath.pathname)[0];

    return (
        <div className={styles["wrapper"]}>
            <HeroBreadCrumb/>
            <LocationInfo location={location}/>
            <Maps location={location.map}/>
            <Services/>
            <LocationChoice/>
            <LocationOurSpace/>
            <NetworkAndPartners/>
            <div className={styles["quotation-wrapper"]}>
                <div className={`content-container ${styles["quotation-container"]}`}>
                    <h3 className={styles["quota-title"]}>{t("common.quotation.title")}</h3>
                    <p className={styles["quota-text"]}>{t("common.quotation.text")}</p>
                    <Link to={"quotation"} className={styles["quota-btn"]}>{t("common.quotation.button")}</Link>
                </div>
            </div>
        </div>
    )
}

export default LocationDetail