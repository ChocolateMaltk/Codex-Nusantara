import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
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

  const { title, date, contentHtml, vidLink } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <>
      <Head>
        <title>{title} - Flora Fauna Indonesia</title>
      </Head>
      <main className="px-6 prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0 dark:text-white">{title}</h1>
        <p className="mt-0 dark:text-white">{pubDate}</p>
        <div className="flex aspect-w-16 aspect-h-9">
        </div>
        <article className="dark:text-white">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p className="dark:text-white">
            <b>
              <Link href="/">Back to home</Link>
            </b>
          </p>
        </article>
      </main>
    </>
  );
}
