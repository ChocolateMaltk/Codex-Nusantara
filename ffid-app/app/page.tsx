import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <h1 className="mt-12 mb-12 text-4xl text-center dark:text-white">
        Flora Fauna Indonesia
      </h1>
      <h2 className="mt-12 mb-12 text-2xl text-center dark:text-white">Indonesia adalah negara kepulauan yang terdapat beraneka ragam makhluk hidup.
      <br />Terletak diantara 2 benua yaitu, Asia dan Australia, <br/> menyebabkan Indonesia memiliki flora dan fauna yang khas dan berbeda dari wilayah lain.</h2>
      <Posts />
    </main>
  )
}
