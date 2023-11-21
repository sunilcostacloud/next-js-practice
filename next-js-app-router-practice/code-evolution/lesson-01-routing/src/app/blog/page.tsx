import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Blog",
  title: {
    absolute: "Blog",
  },
};

const Blog = () => {
  return (
    <div>
      <div className="mb-2">This is Blog page</div>
      <Link href="/">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Home
        </div>
      </Link>
      <Link href="/blog/first-blog">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to First Blog
        </div>
      </Link>
      <Link href="/blog/second-blog">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Second Blog
        </div>
      </Link>
    </div>
  );
};

export default Blog;
