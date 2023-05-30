import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Head from "next/head";

export function generateStaticParams() {
  const posts = getSortedPostsData(); // deduped

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // Already requested! Deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml, flora, fauna, origin } = await getPostData(postId);
  const pubDate = getFormattedDate(date);
  const category = fauna ? "Fauna" : "Flora";

return (
  <>
    <Head>
      <title>{title} - Flora Fauna Indonesia</title>
    </Head>
    <div className="bg-gray-200 border-2 border-black rounded-md p-3 m-4">
      <main className="px-6 prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0 text-black">{title}</h1>
        {flora !== null && (
          <p className="mt-0 text-black">{category} dari {origin}</p>
        )}
        <article className="text-black">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </main>
    </div>
  </>
);

        }
