import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { registerSchema } from "@/utils/validators";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  //Redux state
  const isLoading = useSelector(selectRegisterLoading);

  //Local state cho validation
  const [emailFormatError, setEmailFormatError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //Lưu giá trị tạm để so sánh Password
  const [passwordValue, setPasswordValue] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });


  //Handle submit
  const onSubmit = async (data) => {
    
  };

  useEffect(() => {
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
      <input
        type="text"
        placeholder={t("username")}
      />
      {errors.username && (
        <p className="">{errors.username.message}</p>
      )}

      <input
        type="email"
        placeholder={t("email")}
        disabled={isLoading}
      />
      {emailFormatError && (
        <p className="">{emailFormatError}</p>
      )}

      {errors.email && !emailFormatError && (
        <p className="">{errors.email.message}</p>
      )}

      <input
        placeholder={t("password")}
        {...register("password")}
        disabled={isLoading}
      />
      {passwordError && <p className="">{passwordError}</p>}

      {errors.password && (
        <p className="">{errors.password.message}</p>
      )}

      <input
        type="password"
        placeholder={t("confirm_password")}
        disabled={isLoading}
      />
      {confirmPasswordError && (<p className="">{confirmPasswordError}</p>)}

      {errors.password_confirmation && (
        <p className="">
          {errors.password_confirmation.message}
        </p>
      )}

      <button
        type="submit"
        className=""
        disabled={isLoading}
      >
        {isLoading ? t("siging_up") : t("sigup")}
      </button>
    </form>
  );
};

export default RegisterForm;
