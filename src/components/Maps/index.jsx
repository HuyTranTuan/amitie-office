import { Link } from "react-router-dom";

import styles from "./Maps.module.scss";
import image from "@assets/home-strength.png";

function Maps ({location}) {
    const iframeSrc = location ? location : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.481403212862!2d106.6615988776184!3d10.754456355411417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef6d3f19853%3A0x246af0e8b3aaf097!2sThien%20Hau%20Pagoda!5e0!3m2!1sen!2s!4v1774254368366!5m2!1sen!2s"
    
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <iframe src={iframeSrc}
                    width="100%"
                    height="450"
                    style={{border:"0", padding: "20px"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    )
}

export default Maps;