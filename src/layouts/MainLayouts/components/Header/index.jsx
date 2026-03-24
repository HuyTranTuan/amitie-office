import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";
import logo from "@assets/logo.jpg";

function Header({ onClickToggle }) {
  const { t } = useTranslation();
  function handleClickToggle() {
    onClickToggle();
  }

  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles["logo-wrapper"]}>
        <img src={logo} alt="AMITIE OFFICE" />
      </Link>
      <nav className={styles["nav-wrapper"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.shadow} ${styles.active}` : styles.shadow
          }
        >
          {t("common.nav.home")}
        </NavLink>
        <NavLink
          to="/locations"
          className={({ isActive }) =>
            isActive ? `${styles.shadow} ${styles.active}` : styles.shadow
          }
        >
          {t("common.nav.locations")}
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? `${styles.shadow} ${styles.active}` : styles.shadow
          }
        >
          {t("common.nav.services")}
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? `${styles.shadow} ${styles.active}` : styles.shadow
          }
        >
          {t("common.nav.blogs")}
        </NavLink>
      </nav>
      <div className={styles["func-btn-wrapper"]}>
        {/* <button>{t("common.nav.login")}</button>
                <button>{t("common.nav.bookTour")}</button> */}
      </div>

      <button className={styles["toggle-menu-btn"]} onClick={handleClickToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Header;
