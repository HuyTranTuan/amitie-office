import { Link } from "react-router-dom";
import { Fragment } from 'react';
import { useTranslation } from "react-i18next";

import styles from "./LocationsList.module.scss";
import locationsList from "@/data/locations.json";

function LocationsList () {
    const { t } = useTranslation();

    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <h3 className={styles.heading}>{t("common.home.ourLocations")}</h3>
                {locationsList.map((item) => {
                    return(
                        <div className={styles["card-container"]} key={item.id}>
                            <div className={styles["img-container"]}>
                                <img src={`${import.meta.env.BASE_URL}${item.imgSrc}`} alt={item.title} />
                                {item.isCommingSoon ? <Link className={styles.commingsoon} to={'comming-soon'}>
                                    {t("common.home.comingSoon")}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style={{}} xmlSpace="preserve" className=""><g><path d="m332 181.007-30-.014L301.947 301H422v-30h-90.04z" fill="#FDC140" opacity="1" data-original="#000000"></path><path d="m440.754 135.413 26.192-37.406L442.371 80.8l-26.174 37.381c-25.027-14.85-53.634-24.274-84.197-26.61V61h30V31h-90v30h30v30.571c-30.563 2.336-59.17 11.76-84.197 26.61L191.629 80.8l-24.574 17.207 26.192 37.406c-24.412 20.098-43.866 46.007-56.238 75.587H62v30h65.251a193.967 193.967 0 0 0-4.679 30H0v30h122.571a194.088 194.088 0 0 0 4.679 30H62v30h75.008C166.454 431.403 236.04 481 317 481c107.523 0 195-87.477 195-195 0-60.58-27.77-114.794-71.246-150.587zM317 451c-63.992 0-119.592-36.618-146.948-90H212v-30h-53.762a163.973 163.973 0 0 1-5.549-30H182v-30h-29.311a163.973 163.973 0 0 1 5.549-30H212v-30h-41.948c27.356-53.382 82.956-90 146.948-90 90.981 0 165 74.019 165 165s-74.019 165-165 165z" fill="#FDC140" opacity="1" data-original="#000000"></path></g></svg>
                                </Link> : <></>}
                            </div>
                            <div className={styles["paragraph-container"]}>
                                <div className={styles["paragraph"]}>
                                    <h3 className={styles.title}>{t("common.home.only")} <span className={styles["title-highlight"]}>{t("common.brand")}</span> {t("common.home.canOffer")}</h3>
                                    <p className={styles.text}>
                                        {item.desc.split('\n').map((line, index) => (
                                            <Fragment key={index}>{line} <br /></Fragment>
                                        ))}
                                    </p>
                                    <Link to={item.slug} className={styles.button}>{t("common.home.exploreLocation")}</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LocationsList;