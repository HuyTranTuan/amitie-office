import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./BlogsList.module.scss";
import blogs from "@/data/blogs.json";

function BlogsList() {
  const { t } = useTranslation();
  return (
    <div className={styles["wrapper"]}>
      <div className={`content-container ${styles.container}`}>
        <div className={styles.content}>
          {blogs.map((blog) => {
            return (
              <div className={styles["card-wrapper"]} key={blog.id}>
                <div className={styles["card-img"]}>
                  <img
                    src={`${import.meta.env.BASE_URL}${blog.imgSrc}`}
                    alt={blog.title}
                  />
                </div>
                <div className={styles["card-content"]}>
                  <h3 className={styles.title}>{blog.title}</h3>
                  <Link className={styles["card-link"]} to={blog.path}>
                    {t("common.services.learnMore")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogsList;
