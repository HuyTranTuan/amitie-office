import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Locations.module.scss"
import Maps from "@/components/Maps";
import LocationsStrength from "./components/LocationsStrength";
import Blogs from "@/components/BlogsList";
import NetworkAndPartners from "@/components/NetworkAndPartners";
import HeroBreadCrumb from "@/components/HeroBreadCrumb";
import LocationsList from "./components/LocationsList";

function Locations () {
    const { t } = useTranslation();

    return (
        <div className={styles["wrapper"]}>
            <HeroBreadCrumb/>
            <LocationsStrength/>
            <LocationsList/>
            <Maps/>
            <NetworkAndPartners/>
            <div className={styles["quotation-wrapper"]}>
                <div className={`content-container ${styles["quotation-container"]}`}>
                    <h3 className={styles["quota-title"]}>{t("common.quotation.title")}</h3>
                    <p className={styles["quota-text"]}>{t("common.quotation.text")}</p>
                    <Link to={"quotation"} className={styles["quota-btn"]}>{t("common.quotation.button")}</Link>
                </div>
            </div>
            <Blogs/>
        </div>
    )
}

export default Locations;