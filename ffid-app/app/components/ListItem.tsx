import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
  post: Article;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, fauna, origin } = post;
  const formattedDate = getFormattedDate(date);
  const category = fauna ? "Fauna" : "Flora";

  return (
    <div className="bg-white border-4 border-black rounded-md mb-2 m-4 p-4">
    <li className="mt-4 text-2xl text-black">
      <Link className="text-black hover:text-sky-500" href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{category}</p>
      <p className="text-sm mt-1">{origin}</p>
    </li>
    </div>
  );
}
