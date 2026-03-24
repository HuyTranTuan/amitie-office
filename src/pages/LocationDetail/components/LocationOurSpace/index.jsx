import { useTranslation } from "react-i18next";

import styles from "./LocationOurSpace.module.scss";

function LocationOurSpace () {
    const { t } = useTranslation();
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <h3>{t("common.location.ourSpace")}</h3>
                <div className={styles.gallery}>
                    {["","","",""].map((item, index) => {
                        return (<div key={index} className={styles["img-container"]}>
                            <img src={`${import.meta.env.BASE_URL}assets/our-space/our-space${index+1}.png`} alt=""/>
                        </div>)
                    })}    
                </div>    
            </div>
        </div>
    )
}

export default LocationOurSpace;