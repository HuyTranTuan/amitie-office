import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { forgotPasswordSchema } from "@/utils/validators";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    // setIsLoading(true);

    // try {
    //   const response = await authServices.forgotPassword(data.email);

    //   //Toast
    //   toast.info(t(""), {
    //     description: response.message,
    //   });
    // } catch (error) {
    //   const errorMessage = error.response?.data?.message || error.message;

    //   toast.error(t("request_failed"), {
    //     description: errorMessage,
    //   });
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
      {/* Email */}
      <input
        type="email"
        placeholder={t("email")}
        {...register("email")}
        className=""
        disabled={isLoading}
      />
      {errors.email && (
        <p className="">{errors.email.message}</p>
      )}

      <button
        type="submit"
        className=""
        disabled={isLoading}
      >
        {isLoading ? t("sending") : t("resend_link_new_psw")}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
