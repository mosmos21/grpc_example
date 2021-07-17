import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
}

export const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>{props.title && `${props.title} - `}todo_app</title>
    </Head>
    <main>
      {props.children}
    </main>
  </>
);
