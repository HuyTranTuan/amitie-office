import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Services.module.scss";
import HeroBreadCrumb from "@/components/HeroBreadCrumb";
import Maps from "@/components/Maps";
import ServicesList from "@/components/ServicesList";
import NetworkAndPartners from "@/components/NetworkAndPartners";
import Blogs from "@/components/BlogsList";

function Services(){
    const { t } = useTranslation();
    return (
        <div className={styles["wrapper"]}>
            <HeroBreadCrumb/>
            <ServicesList/>
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

export default Services;