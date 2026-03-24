import { useTranslation } from "react-i18next";

import styles from "./LocationsStrength.module.scss";
import image from "@assets/home-strength.png";

function LocationsStrength () {
    const { t } = useTranslation();
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <div className={styles["img-container"]}>
                    <img src={image} alt={"Benefit"} />
                </div>
                <div className={styles["paragraph-container"]}>
                    <div className={styles["paragraph"]}>
                        <h3 className={styles.title}>{t("common.location.strengthTitle")}</h3>
                        <ul className={styles.list}>
                            <li className={styles["list-item"]}>
                                <h3>{t("common.location.strengthLocationTitle")}</h3>
                                <p>{t("common.location.strengthLocationText")}</p>
                            </li>
                            <li className={styles["list-item"]}>
                                <h3>{t("common.location.strengthBuildingTitle")}</h3>
                                <p>{t("common.location.strengthBuildingText")}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationsStrength;