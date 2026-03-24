import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Hero.module.scss";
import heroImg from "@/assets/herobackground.png";

function Hero () {
    const { t } = useTranslation();

    return (
        <div className={styles["wrapper"]}>
            <div className={styles.overlays}></div>
            <div className={`content-container ${styles["main-content"]}`}>
                <h1 className={styles.title}>{t("common.home.heroTitle")}</h1>
                <p className={styles.content}>{t("common.home.heroText")}</p>

                <div className={styles["btn-container"]}>
                    <Link to={""}>{t("common.home.contactUs")}</Link>
                    <Link to={""}>{t("common.home.callHotline")}</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;