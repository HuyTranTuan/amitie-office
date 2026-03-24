import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./HeroBreadCrumb.module.scss";
import heroImg from "@/assets/herobackground.png";

function HeroBreadCrumb () {
    const { t } = useTranslation();
    const location = useLocation();
    const pathNamesArray = location.pathname.split('/'); 
    const pathnames = pathNamesArray.filter((x) => x);
    const pageTitle = pathnames[pathnames.length -1].split("-").join(" ");

    const capitalize = (sentence) => {
        if (!sentence) return ""; // Tránh lỗi nếu chuỗi rỗng
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    };

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div className={styles["wrapper"]}>
            <div className={styles.overlays}></div>
            <div className={`content-container ${styles["main-content"]}`}>
                <h1 className={styles.title}>{capitalizeWords(pageTitle)}</h1>

                <div className={styles["btn-container"]}>
                    <Link to="/">{t("common.nav.home")}</Link>
                    {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <span key={name}>
                            {isLast ? (
                                " / " + capitalizeWords(name.split("-").join(" "))
                            ) : (
                                <Link to={routeTo} > &nbsp;/&nbsp; 
                                    {capitalizeWords(name.split("-").join(" "))}
                                </Link>
                            )}
                        </span>
                    );
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeroBreadCrumb;