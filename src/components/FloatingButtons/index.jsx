import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./FloatingButtons.module.scss";
import enFlag from "@/assets/en.png";
import vnFlag from "@/assets/vn.png";

function FloatingButtons() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className={styles.floatingContainer}>
      {/* Nút Đổi Ngôn Ngữ EN */}
      <button className={styles.btn} onClick={() => changeLanguage("en")}>
        <img src={enFlag} alt="English" />
      </button>

      {/* Nút Đổi Ngôn Ngữ VN */}
      <button className={styles.btn} onClick={() => changeLanguage("vn")}>
        <img src={vnFlag} alt="Tiếng Việt" />
      </button>

      {/* Nút Gọi Điện */}
      <a href="tel:0123456789" className={styles.btn}>
        <div className={`${styles.iconCircle} ${styles.phoneColor}`}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </a>

      {/* Nút Email */}
      <a href="mailto:example@gmail.com" className={styles.btn}>
        <div className={`${styles.iconCircle} ${styles.emailColor}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </a>
    </div>
  );
}

export default FloatingButtons;
