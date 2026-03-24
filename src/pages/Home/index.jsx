import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Home.module.scss";
import Hero from "@/pages/Home/components/Hero";
import HomeServices from "@/components/ServicesList";
import HomeBenefit from "@/pages/Home/components/HomeBenefit";
import HomeStrength from "@/components/Strength";
import HomeLocations from "@/pages/Home/components/HomeLocations";
import NetworkAndPartners from "@/components/NetworkAndPartners";
import HomeBlogs from "@/components/BlogsList";

function Home(){
    const { t } = useTranslation();
    return (
        <div className={styles["wrapper"]}>
            <Hero/>
            <HomeServices/>
            <HomeBenefit/>
            <HomeStrength/>
            <HomeLocations/>
            <NetworkAndPartners/>
            <div className={styles["quotation-wrapper"]}>
                <div className={`content-container ${styles["quotation-container"]}`}>
                    <h3 className={styles["quota-title"]}>{t("common.quotation.title")}</h3>
                    <p className={styles["quota-text"]}>{t("common.quotation.text")}</p>
                    <Link to={"quotation"} className={styles["quota-btn"]}>{t("common.quotation.button")}</Link>
                </div>
            </div>
            <HomeBlogs/>
        </div>
    )
}

export default Home;