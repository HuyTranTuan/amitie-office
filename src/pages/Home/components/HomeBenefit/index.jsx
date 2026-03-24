import { useTranslation } from "react-i18next";

import styles from "./HomeBenefit.module.scss";
import image from "@assets/home-benefit.png";

function HomeBenefit () {
    const { t } = useTranslation();
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <div className={styles["paragraph-container"]}>
                    <div className={styles["paragraph"]}>
                        <h3 className={styles.title}>{t("common.home.benefitTitle1")}</h3>
                        <p className={styles.text}>{t("common.home.benefitText1")}</p>
                    </div>
                    <div className={styles["paragraph"]}>
                        <h3 className={styles.title}>{t("common.home.benefitTitle2")}</h3>
                        <p className={styles.text}>{t("common.home.benefitText2")}</p>
                    </div>
                </div>
                <div className={styles["img-container"]}>
                    <img src={image} alt={"Benefit"} />
                </div>
            </div>
        </div>
    )
}

export default HomeBenefit;