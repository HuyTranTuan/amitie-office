import { Link } from "react-router-dom";

import styles from "./Strength.module.scss";
import image from "@assets/home-strength.png";

function Strength () {
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <div className={styles["img-container"]}>
                    <img src={image} alt={"Benefit"} />
                </div>
                <div className={styles["paragraph-container"]}>
                    <div className={styles["paragraph"]}>
                        <h3 className={styles.title}>Only <span className={styles["title-highlight"]}>Amitie Office</span> Can Offer</h3>
                        <p className={styles.text}>At Amitie, we provide more than just an office. We deliver smart
solutions that help your business grow, connect, and succeed.</p>
                        <ul className={styles.list}>
                            <li className={styles["list-item"]}>Prime CBD Location</li>
                            <li className={styles["list-item"]}>Flexible Office Solutions</li>
                            <li className={styles["list-item"]}>Networking Opportunities</li>
                            <li className={styles["list-item"]}>Modern Facilities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strength;