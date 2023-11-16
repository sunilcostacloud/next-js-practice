import Link from "next/link";

const FirstBlog = () => {
    return (
        <div>
            <div className="mb-2">First Blog</div>
            <Link href="/blog">
                <div className="underline text-orange-500 hover:text-orange-700 mb-1">
                    Go to Blog page
                </div>
            </Link>
        </div>
    )
}

export default FirstBlog