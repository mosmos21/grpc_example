import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { useRouter } from "next/router";

type Props = {
  title?: string;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  const { push } = useRouter();

  const handleClickRegister = React.useCallback(() => {
    push("/register");
  }, [push]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <title>{title && `${title} - `}todo_app</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            TODO APP
          </Typography>
          <RegisterButton onClick={handleClickRegister}>
            Register
          </RegisterButton>
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
    </>
  );
};

const RegisterButton = styled(Button)({
  marginLeft: "auto",
  color: "inherit"
})
