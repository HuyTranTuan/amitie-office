import { useTranslation } from "react-i18next";

function Account(){
    const { t } = useTranslation();
    return (
        <>{t("common.account.title")}</>
    )
}

export default Account