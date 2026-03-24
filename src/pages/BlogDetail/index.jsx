import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./BlogDetail.module.scss";
import blogs from "@/data/blogs.json";
import NetworkAndPartners from "@/components/NetworkAndPartners";
import BlogInfo from "./components/BlogInfo";

function BlogDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const blog = blogs.filter((blog) => blog.path === location.pathname)[0];

  return (
    <div className={styles["wrapper"]}>
      <BlogInfo blog={blog} />
      <NetworkAndPartners />
      <div className={styles["quotation-wrapper"]}>
        <div className={`content-container ${styles["quotation-container"]}`}>
          <h3 className={styles["quota-title"]}>
            {t("common.quotation.title")}
          </h3>
          <p className={styles["quota-text"]}>{t("common.quotation.text")}</p>
          <Link to={"quotation"} className={styles["quota-btn"]}>
            {t("common.quotation.button")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
