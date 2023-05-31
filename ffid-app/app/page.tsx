import Gallery from "./components/Gallery";
import Posts from "./components/Posts";
import WallaceaDropdown from "./components/WallaceaButton";
import Image from "next/image";

const items = [
  {
    id: "1",
    imageUrl: "/KomodoCarousel.jpg",
    caption: "Komodo",
    clickURL: "/posts/komodo-dragon"
  },
  {
    id: "2",
    imageUrl: "/c_item3.jpg",
    caption: "Titan Arum",
    clickURL: "/posts/amorphophallus-titanium"
  },
  {
    id: "3",
    imageUrl: "/c_item2.jpg",
    caption: "Kasuari",
    clickURL: "/posts/cassowary"
  },
  {
    id: "4",
    imageUrl: "/c_item4.jpg",
    caption: "Rafflessia Arnoldi",
    clickURL: "/posts/rafflesia-arnoldii"
  },
];

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <div className="flex items-center justify-center">
        <Image src={"/LFFID.png"} width={1080} height={360} alt="Flora dan Fauna Indonesia" />
      </div>
      <h2 className="mt-12 mb-12 text-2xl text-center dark:text-white">
        Indonesia merupakan negara kepulauan yang memiliki beraneka ragam makhluk hidup.
        <br />Letak geografis Indonesia yang berada di antara benua Asia dan Australia, <br/> menyebabkan negara ini memiliki flora dan fauna yang khas.
      </h2>

      <div>
        <Gallery items={items} />
      </div>

      <div className="flex items-center justify-center">
        <h3 className="mt-12 text-3xl text-center dark:text-white">
          Tahukah Anda? Persebaran Flora dan Fauna Indonesia <br/>dipisah oleh Garis Wallacea dan Garis Weber?
        </h3>
      </div>

      <div>
        <WallaceaDropdown />
      </div>

      <Posts />
    </main>
  );
}
