import Head from "next/head";
import About from "../../pages/about";
import Home from "./page";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <About></About>
      <Home></Home>
    </>
  );
}
