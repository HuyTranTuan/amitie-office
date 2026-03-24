import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import styles from "./LocationInfo.module.scss"
import image from "@assets/home-benefit.png";

function LocationInfo({location}){
    const { t } = useTranslation();
    
    return(
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <div className={`${styles.inner} ${styles["inner-paragraph"]}`}>
                    <div className={styles["paragraph-container"]}>
                        <h3 className={styles.title}>{location.title}</h3>
                        <p className={styles.text}>{location.desc}</p>
                        <Link to={"quotation"} className={styles["quota-btn"]}>{t("common.quotation.button")}</Link>
                    </div>
                    <div className={styles["img-container"]}>
                        <img src={image} alt={"Benefit"} />
                    </div>
                </div>
                <div className={`${styles.inner} ${styles["inner-info"]}`}>
                    <div className={styles["info-container"]}>
                        <FontAwesomeIcon icon={faClock}/>
                        <h3 className={styles["info-title"]}>{t("common.location.openingHours")}</h3>
                        <ul className={styles["info-text"]}>{location.open.split('\n').map((line, index) => (
                            <li key={index}> {line} <br /></li>
                        ))}</ul>
                    </div>
                    <div className={styles["info-container"]}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <h3 className={styles["info-title"]}>{t("common.location.hotline")}</h3>
                        <p className={styles["info-text"]}>{location.hotline}</p>
                    </div>
                    <div className={styles["info-container"]}>
                        <FontAwesomeIcon icon={faStar}/>
                        <h3 className={styles["info-title"]}>{t("common.location.services")}</h3>
                        <p className={styles["info-text"]}>{location.services}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationInfo;