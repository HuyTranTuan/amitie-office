import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const SignUpModal = ({ open = true, onOpenChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <></>
  );
};

export default SignUpModal;
