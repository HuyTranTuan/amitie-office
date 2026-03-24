import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./LocationChoice.module.scss";
import image from "@assets/home-strength.png";

function LocationChoice () {
    const { t } = useTranslation();
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <div className={styles["img-container"]}>
                    <img src={image} alt={"Benefit"} />
                </div>
                <div className={styles["paragraph-container"]}>
                    <div className={styles["paragraph"]}>
                        <h3 className={styles.title}>{t("common.location.choiceTitle")} <span className={styles["title-highlight"]}>{t("common.location.choiceTitleHighlight")}</span> {t("common.location.choiceTitleSuffix")}</h3>
                        <p className={styles.text}>{t("common.location.choiceText")}</p>
                        <ul className={styles.list}>
                            <li className={styles["list-item"]}>{t("common.location.choiceItem1")}</li>
                            <li className={styles["list-item"]}>{t("common.location.choiceItem2")}</li>
                            <li className={styles["list-item"]}>{t("common.location.choiceItem3")}</li>
                            <li className={styles["list-item"]}>{t("common.location.choiceItem4")}</li>
                        </ul>

                        <Link to={""} className={styles.button}>{t("common.location.contactNow")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationChoice;