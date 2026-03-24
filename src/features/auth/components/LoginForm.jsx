import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { loginSchema } from "@/utils/validators";
// import {
//   selectLoginLoading,
//   loginStart,
//   loginSuccess,
//   loginFailure,
// } from "@/features/auth";
// import { authServices } from "@/services";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [params] = useSearchParams();

  const isLoading = useSelector(selectLoginLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    // dispatch(loginStart());

    // try {
    //   const response = await authServices.login(data);

    //   //Lưu token vào localStorage
    //   if (response.access_token) {
    //     localStorage.setItem("access_token", response.access_token);
    //   }
    //   if (response.refresh_token) {
    //     localStorage.setItem("refresh_token", response.refresh_token);
    //   }

    //   //Lưu user vào localStorage để restore khi F5
    //   if (response.user) {
    //     localStorage.setItem("user", JSON.stringify(response.user));
    //   }
    //   if (response.user.verified) {
    //     const continuePath = params.get("continue") || "/";
    //     navigate(continuePath);
    //     dispatch(loginSuccess(response));
    //     //Hiển thị toast
    //     toast.success(
    //       `${t("login_success")}: ${t("greeting", { username: response.user.username })}`,
    //     );
    //   } else {
    //     navigate(`/verify-email?token=${response.access_token}`);
    //     toast.info(`${t("login_success")}`);
    //   }
    // } catch (error) {
    //   const messageToDisplay =
    //     typeof error === "string"
    //       ? error
    //       : error.response?.data?.message || error.message || "Unknown Error";

    //   dispatch(loginFailure(error));

    //   toast.error(`${t("login_fail")}: ${messageToDisplay}`);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder={t("email")}
        {...register("username")}
        className=""
        disabled={isLoading}
      />
      {errors.username && (
        <p className="">{errors.username.message}</p>
      )}
      <input
        placeholder={t("password")}
        {...register("password")}
        className=""
        disabled={isLoading}
      />
      {errors.password && (
        <p className="">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className=""
        disabled={isLoading}
      >
        {isLoading ? t("loging_in") : t("login")}
      </button>
    </form>
  );
}
export default LoginForm;
