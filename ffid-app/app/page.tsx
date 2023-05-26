import Posts from "./components/Posts";
import WallaceaDropdown from "./components/WallaceaButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
        <div className="flex items-center justify-center">
        <Image src={"/LFFID.png"} width={1080} height={360} alt="Flora dan Fauna Indonesia" />
        </div>
      <h2 className="mt-12 mb-12 text-2xl text-center dark:text-white">Indonesia merupakan negara kepulauan yang memiliki beraneka ragam makhluk hidup.
      <br />Letak geografis Indonesia yang berada di antara benua Asia dan Australia, <br/> menyebabkan negara ini memiliki flora dan fauna yang khas.</h2>
      <div className="flex items-center justify-center">
        <h3 className="mt-12 text-3xl text-center dark:text-white">Tahukah Anda? Di tengah Indonesia terdapat Garis Wallacea!</h3>
      </div>
        <div>
        <WallaceaDropdown />
        </div>
      <Posts />
    </main>
  )
}
