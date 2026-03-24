import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";
import logo from "@assets/logo.jpg"

function Footer(){
    const { t } = useTranslation();
    return (
        <footer className={styles["wrapper"]}>
            <div className={`${styles["container"]} content-container`}>
                <div className={`${styles["item-wrapper"]} ${styles["logo-wrapper"]}`}>
                    <img src={logo} alt="AMITIE OFFICE" />
                </div>
                <div className={styles["item-wrapper"]}>
                    <h3 className={styles["item-title"]}>{t("common.brand")}</h3>
                    <ul className={styles["list-wrapper"]}>
                        <li>100 Nguyen Thi Minh Khai, HCMC</li>
                        <li>200 Pasteur, HCMC</li>
                    </ul>
                </div>
                <div className={styles["item-wrapper"]}>
                    <h3 className={styles["item-title"]}>{t("common.footer.service")}</h3>
                    <ul className={styles["list-wrapper"]}>
                        <Link to={"/virtual-offices"}>{t("common.footer.virtualOffices")}</Link>
                        <Link to={"/private-offices"}>{t("common.footer.privateOffices")}</Link>
                        <Link to={"/metting-rooms"}>{t("common.footer.meetingRooms")}</Link>
                        <Link to={"/event-venues"}>{t("common.footer.eventVenues")}</Link>
                        <Link to={"/other-services"}>{t("common.footer.otherServices")}</Link>
                    </ul>
                </div>
                <div className={styles["item-wrapper"]}>
                    <h3 className={styles["item-title"]}>{t("common.footer.contactUs")}</h3>
                    <ul className={styles["list-wrapper"]}>
                        <Link to={"/contact-us"}>{t("common.footer.contactToday")}</Link>
                    </ul>
                </div>
                <div className={styles["item-wrapper"]}>
                    <ul className={styles["list-wrapper"]}>
                        <li><a href="tel:+84123456789">(+84) 12 345 6789</a></li>
                        <li><a href="mailto:info@abcoffice.vn">info@abcoffice.vn</a></li>
                    </ul>
                </div>
                <div className={styles["item-wrapper"]}>
                    <h3 className={styles["item-title"]}>{t("common.footer.hoursTitle")}</h3>
                    <ul className={styles["list-wrapper"]}>
                        <li>{t("common.footer.hoursWeekdays")}</li>
                        <li>{t("common.footer.hoursSaturday")}</li>
                        <li>{t("common.footer.hoursClosed")}</li>
                    </ul>
                </div>
                <div className={`${styles["item-wrapper"]} ${styles["social-links"]}`}>
                    <a href="https://www.facebook.com/wofficevn/" target="_blank" rel="nofollow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M29.5896 22.3301L30.6916 15.1456H23.7984V10.4834C23.7984 8.51786 24.7613 6.60194 27.8488 6.60194H30.9828V0.485437C30.9828 0.485437 28.1386 0 25.4192 0C19.742 0 16.0314 3.44078 16.0314 9.6699V15.1456H9.7207V22.3301H16.0314V39.698C17.2968 39.8965 18.5937 40 19.9149 40C21.236 40 22.5329 39.8965 23.7984 39.698V22.3301H29.5896Z" fill="white"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/w-business-center/" target="_blank" rel="nofollow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M9.93066 37.572H2.54883V13.822H9.93066V37.572ZM28.7285 13.2312C36.2029 13.2312 37.581 18.1478 37.5811 24.5437L37.5781 37.572H30.2031V26.0232C30.2031 23.2693 30.1542 19.7245 26.3682 19.7244C22.5272 19.7244 21.9395 22.7249 21.9395 25.823V37.571H14.5645V13.822H21.6445V17.0681H21.7432C22.4517 15.8567 23.476 14.8599 24.7061 14.1843C25.936 13.5088 27.3262 13.1792 28.7285 13.2312ZM6.24219 2.01733C8.60573 2.01687 10.522 3.93223 10.5225 6.29565C10.5229 8.65909 8.60754 10.5754 6.24414 10.5759C3.8807 10.5764 1.9645 8.66089 1.96387 6.29761C1.96341 3.93406 3.87876 2.0178 6.24219 2.01733Z" fill="white"></path>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@wbusinesscenter1091" target="_blank" rel="nofollow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M32.0005 5.99219C36.4185 5.99245 40.0005 9.57407 40.0005 13.9922V26.0078C40.0003 30.4259 36.4177 34.0078 31.9995 34.0078H7.99951C3.58136 34.0078 -0.000290224 30.4259 -0.000488281 26.0078V13.9922C-0.000488281 9.57391 3.58123 5.99219 7.99951 5.99219H32.0005ZM16.2456 26.0098L26.6714 19.9902L16.2456 13.9893V26.0098Z" fill="white"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/wofficevn/" target="_blank" rel="nofollow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g clipPath="url(#clip0_22_308)"><path d="M19.9995 9.72927C14.3281 9.72927 9.72969 14.3286 9.72969 19.9998C9.72969 25.6722 14.3281 30.2696 19.9995 30.2696C25.6719 30.2696 30.2711 25.6722 30.2711 19.9998C30.2711 14.3286 25.6719 9.72927 19.9995 9.72927ZM19.9995 26.6667C16.3182 26.6667 13.3326 23.682 13.3326 19.9998C13.3326 16.3177 16.3181 13.333 19.9995 13.333C23.6816 13.333 26.6671 16.3177 26.6671 19.9998C26.6671 23.6819 23.6816 26.6667 19.9995 26.6667ZM33.0761 9.32404C33.0761 10.6484 32.0013 11.7232 30.6761 11.7232C29.3509 11.7232 28.2761 10.6484 28.2761 9.32404C28.2761 7.99912 29.3509 6.92404 30.6761 6.92404C32.0013 6.92404 33.0761 7.99912 33.0761 9.32404ZM38.9501 6.89943C38.4388 5.58365 37.7549 4.4688 36.6438 3.35677C34.402 1.11341 31.335 0.260601 28.2466 0.120757C26.113 0.0221631 25.4319 0.000366211 19.9995 0.000366211C14.5689 0.000366211 13.8878 0.0221631 11.7542 0.120757C8.65836 0.260913 5.59484 1.11904 3.35727 3.35669C1.11094 5.60302 0.262109 8.6606 0.120078 11.7546C0.0228906 13.8882 0 14.5685 0 19.9998C0 25.4312 0.0228906 26.1126 0.120078 28.247C0.262734 31.3518 1.11008 34.3978 3.35711 36.6432C5.60383 38.8882 8.66047 39.7383 11.7542 39.88C13.8878 39.9775 14.5689 39.9995 19.9995 39.9995C25.432 39.9995 26.113 39.9774 28.2466 39.88C31.3476 39.7379 34.4013 38.8871 36.6436 36.6432C38.8844 34.4008 39.7394 31.3341 39.8796 28.2469C39.9771 26.1126 40 25.4311 40 19.9997C40 14.5683 39.9771 13.8881 39.8796 11.7545C39.783 9.62521 39.4448 8.17193 38.9501 6.89943ZM36.2795 28.0816C36.1808 30.2539 35.6761 32.5134 34.0955 34.0959C32.4941 35.6994 30.2682 36.1804 28.0823 36.2801C25.9728 36.3757 25.3411 36.3966 19.9995 36.3966C14.6598 36.3966 14.028 36.3756 11.9184 36.2801C9.72695 36.1802 7.50453 35.6911 5.90445 34.0961C4.30898 32.5058 3.81797 30.2525 3.72023 28.0815C3.62469 25.9731 3.60375 25.3406 3.60375 19.9997C3.60375 14.6601 3.62477 14.0276 3.72023 11.9179C3.81766 9.7556 4.33211 7.47951 5.90414 5.90482C7.49805 4.30826 9.74359 3.81974 11.9185 3.72052C14.028 3.62419 14.6598 3.60404 19.9995 3.60404C25.3403 3.60404 25.9728 3.62419 28.0824 3.72052C30.2726 3.82044 32.4987 4.30732 34.0953 5.90451C35.6927 7.50248 36.1805 9.73958 36.2795 11.918C36.3762 14.0276 36.3972 14.6601 36.3972 19.9998C36.3971 25.3407 36.3762 25.9732 36.2795 28.0816Z" fill="white"></path></g>
                            <defs><clipPath id="clip0_22_308"><rect width="40" height="40" fill="white"></rect></clipPath></defs>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@wbusinesscenter" target="_blank" rel="nofollow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M37.5252 10.0305C35.2424 10.0305 33.1361 9.27427 31.4447 7.99849C29.5049 6.53599 28.1111 4.39067 27.6189 1.91802C27.4955 1.29629 27.4306 0.664357 27.4252 0.0305176H20.9041V17.8493L20.8963 27.6094C20.8963 30.2188 19.1971 32.4313 16.8416 33.2094C16.136 33.4427 15.3929 33.5413 14.651 33.5C13.6697 33.4461 12.7502 33.1501 11.951 32.6719C10.2502 31.6547 9.09705 29.8094 9.0658 27.6985C9.01659 24.3993 11.6838 21.7094 14.9806 21.7094C15.6314 21.7094 16.2564 21.8157 16.8416 22.0086V15.3876C16.2244 15.2961 15.5963 15.2485 14.9611 15.2485C11.3525 15.2485 7.97752 16.7485 5.56502 19.4508C3.74159 21.493 2.64784 24.0985 2.47909 26.8305C2.25799 30.4196 3.57127 33.8313 6.11815 36.3485C6.49237 36.718 6.88534 37.061 7.29627 37.3774C9.47987 39.0579 12.1494 39.9688 14.9611 39.9688C15.5963 39.9688 16.2244 39.9219 16.8416 39.8305C19.4681 39.4415 21.8916 38.2391 23.8041 36.3485C26.1541 34.0258 27.4525 30.9422 27.4666 27.6602L27.433 13.0852C28.5567 13.952 29.7878 14.6699 31.0955 15.2211C33.1416 16.0844 35.3111 16.5219 37.5439 16.5211V10.029C37.5455 10.0305 37.5267 10.0305 37.5252 10.0305Z" fill="white"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;