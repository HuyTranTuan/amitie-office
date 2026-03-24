import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const AuthCard = ({ showAuthCard }) => {
  const { t } = useTranslation();

  return (
    <div
      // className={`min-w-[300px] relative hidden ${showAuthCard ? "md:block" : "md:hidden"}`}
      className={ clsx(styles.wrapper, showAuthCard ? "wrapper-show" : "wrapper-hidden")}
    >
      <div
        // className={{}}
      >
        {/* Nội dung giữ nguyên */}
        <div className="">
          <h2 className=""> {t("login_or_register")} </h2>
          <p className=""> {t("see_what_people_talk")} </p>
        </div>

        <button className="">
          <Link to="auth/login" className="">
            {t("login_with_username")}
          </Link>
        </button>
      </div>
    </div>
  );
};
export default AuthCard;
