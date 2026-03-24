import styles from "./BlogInfo.module.scss";

function BlogInfo({ blog = {} }) {
  return (
    <div className={styles.wrapper}>
      <div className={`content-container ${styles.container}`}>
        <div className={styles["img-container"]}>
          <img
            src={`${import.meta.env.BASE_URL}${blog.imgSrc}`}
            alt={blog.title}
          />
        </div>
        <h1 className={styles.title}>{blog?.title}</h1>
        <div className={styles.desc}>
          {blog?.desc.map((obj) => {
            return obj.style === "bold" ? (
              <strong className={styles["text-strong"]}>{obj.text}</strong>
            ) : (
              <p className={styles["text-normal"]}>{obj.text}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
