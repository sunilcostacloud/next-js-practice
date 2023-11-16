import Link from "next/link";

const Reviews = () => {
  return (
    <>
      <div className="mb-2">This is reviews page</div>
      <Link href="/products">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To Products
        </div>
      </Link>
      <Link href="/products/1/reviews/1">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To review 1
        </div>
      </Link>
    </>
  );
};

export default Reviews;
