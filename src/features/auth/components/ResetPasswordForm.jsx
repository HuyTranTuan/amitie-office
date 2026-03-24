import { useForm } from "react-hook-form";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { resetPasswordSchema } from "@/utils/validators";

const ResetPasswordForm = ({ token, email }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <input
        placeholder={t("new_password")}
        {...register("password")}
        disabled={isLoading}
      />
      {passwordError && <p className="text-destructive">{passwordError}</p>}
      {errors.password && (
        <p className="text-destructive">{errors.password.message}</p>
      )}

      <input
        placeholder={t("confirm_password")}
        {...register("password_confirmation")}
        disabled={isLoading}
      />
      {confirmPasswordError && (
        <p className="text-destructive">{confirmPasswordError}</p>
      )}
      {errors.password_confirmation && (
        <p className="text-destructive">
          {errors.password_confirmation.message}
        </p>
      )}

      <button
        type="submit"
        className=""
        disabled={isLoading}
      >
        {isLoading ? t("processing") : t("create_new_password")}
      </button>
    </form>
  );
};
export default ResetPasswordForm;
