import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <h1 className="mt-12 mb-12 text-4xl text-center dark:text-white">
        Flora & Fauna Indonesia
      </h1>
      <h2 className="mt-12 mb-12 text-2xl text-center dark:text-white">Indonesia merupakan negara kepulauan yang memiliki beraneka ragam makhluk hidup.
      <br />Letak geografis Indonesia yang berada di antara benua Asia dan Australia, <br/> menyebabkan negara ini memiliki flora dan fauna yang khas.</h2>
      <Posts />
    </main>
  )
}
