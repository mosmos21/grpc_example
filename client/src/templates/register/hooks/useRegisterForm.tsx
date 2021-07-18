import React from "react";
import { useAuthForm } from "@/hooks/useAuthForm";
import { register } from "@/services/auth/register";

export const useRegisterForm = () => {
  const { control, getValues } = useAuthForm();

  const handleClickSubmit = React.useCallback(() => {
    console.log(getValues());
    register({ userId: getValues("userId"), password: getValues("password") })
      .then(() => console.log("registered"))
  }, []);

  return { control, handleClickSubmit };
}
