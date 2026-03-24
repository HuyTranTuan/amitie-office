import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>404</h1>
      <p>{t("common.notFound.message")}</p>
      <Link to="/">{t("common.notFound.goHome")}</Link>
    </div>
  )
}

