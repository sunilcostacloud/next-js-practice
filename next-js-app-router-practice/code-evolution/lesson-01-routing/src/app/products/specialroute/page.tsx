import Link from "next/link";

const SpecialRoute = () => {
  return (
    <>
      <div className="mb-2">Special route</div>
      <Link href="/products">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To Products
        </div>
      </Link>
    </>
  );
};

export default SpecialRoute;
