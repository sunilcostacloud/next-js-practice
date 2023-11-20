import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mb-2">This is home page</div>

      <Link href="/profile">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to profile page
        </div>
      </Link>
      <Link href="/about">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to about page
        </div>
      </Link>
      <Link href="/blog">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Blog page
        </div>
      </Link>
      <Link href="/products">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Products page
        </div>
      </Link>
      <Link href="/catch-all-routes">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to catch all routes
        </div>
      </Link>
      <Link href="/catch-all-routes/1/2/reviews/abc">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Catching All Routes
        </div>
      </Link>
      <Link href="/dashboard">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Dashboard
        </div>
      </Link>
      <Link href="/_private-folders">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Private folder
        </div>
      </Link>
      <Link href="/%5Fprivate-folders-new">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Private folder new
        </div>
      </Link>
      <Link href="/register">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Register Page in route groups
        </div>
      </Link>
      <Link href="/login">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Login Page in route groups
        </div>
      </Link>
      <Link href="/forgot-password">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Forgot Password Page in route groups
        </div>
      </Link>
      <Link href="/sharable-ui-1">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Sharable ui 1 in route groups
        </div>
      </Link>
      <Link href="/sharable-ui-2">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Sharable ui 2 in route groups
        </div>
      </Link>
    </>
  );
}
