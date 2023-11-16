import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="mb-2">Page Not Found</div>
      <Link href="/">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Home
        </div>
      </Link>
    </>
  );
};

export default NotFound;
