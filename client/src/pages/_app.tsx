import "destyle.css/destyle.css";
import type { AppProps } from 'next/app'

const Todo = ({ Component, pageProps }: AppProps) =>
  <Component {...pageProps} />

export default Todo
