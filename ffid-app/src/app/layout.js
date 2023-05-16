import Head from "next/head";
import About from "../../pages/about";
import Flora from "../../pages/Flora";
import Fauna from "../../pages/Fauna";
import Daerah from "../../pages/Daerah";
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
