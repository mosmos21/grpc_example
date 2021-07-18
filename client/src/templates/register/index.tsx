import React from "react";
import { AuthForm } from "@/components/organisms/AuthForm";
import { Layout } from "@/layout";
import { useRegisterForm } from "@/templates/register/hooks/useRegisterForm";

export const Template: React.VFC = () =>  {
  const { control, handleClickSubmit } = useRegisterForm();

  return (
    <Layout title="Register">
      <AuthForm title="Register" control={control} onClickSubmit={handleClickSubmit} />
    </Layout>
  );
}
