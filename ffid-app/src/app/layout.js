import Head from "next/head";
import About from "../../pages/about";
import Flora from "../../pages/Content Pages/Flora";
import Fauna from "../../pages/ Content Pages/Fauna";
import Daerah from "../../pages/Content Pages/Daerah";
import Home from "../../pages/page";
import LandingPage from "../../pages/LandingPage";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FlorFaunID</title>
      </Head>
      <LandingPage></LandingPage>
    </>
  );
}
