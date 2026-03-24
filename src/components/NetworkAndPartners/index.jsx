import { Link } from "react-router-dom";

import styles from "./NetworkAndPartners.module.scss";
import networkAndPartners from "@/data/networks-partners.json";

function NetworkAndPartners () {
    const networks = networkAndPartners.networks;
    const partners = networkAndPartners.partners;
    return (
        <div className={styles["wrapper"]}>
            <div className={`content-container ${styles.container}`}>
                <div className={styles.heading}>
                    <h3 className={styles["title"]}>Our network & partners</h3>
                    <div className={styles["networks-container"]}>
                        {networks.map((network, index) => {
                            return (<div className={styles["network-container"]} key={index}>
                                <img src={`${import.meta.env.BASE_URL}${network}`} alt={"logo-network"} />
                            </div>)  
                        })}
                    </div>
                </div>
                <div className={styles["partners-container"]}>
                    {partners.map((partner, index) => {
                        return (<div className={styles["partner-container"]} key={index}>
                            <img src={`${import.meta.env.BASE_URL}${partner}`} alt={"logo-partner"} />
                        </div>)  
                    })}
                </div>
            </div>
        </div>
    )
}

export default NetworkAndPartners;