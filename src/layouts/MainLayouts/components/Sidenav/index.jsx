import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidenav.module.scss";
import logo from "@assets/logo.jpg";

function Sidenav({ isToggle, onClickToggle }) {
  const { t } = useTranslation();
  function handleClickToggle() {
    onClickToggle();
  }

  return (
    <div className={`${styles.shadow} ${isToggle ? styles.active : ""}`}>
      <nav className={`${styles.wrapper} ${isToggle ? styles.active : ""}`}>
        <Link to="/" className={styles["logo-wrapper"]}>
          <img src={logo} alt="AMITIE OFFICE" />
        </Link>
        <button className={styles["close-btn"]} onClick={handleClickToggle}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className={styles["nav-wrapper"]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              {t("common.nav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              {t("common.nav.locations")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              {t("common.nav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              {t("common.nav.blogs")}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;
