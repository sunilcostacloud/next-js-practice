import Link from "next/link";
import { notFound } from "next/navigation";

const ReviewId = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
    // by default it will take to page not found page that we created globally
    // if we create not-found.tsx in this folder level then it takes that file
  }
  return (
    <div>
      <div className="mb-2">Reviews</div>
      <div className="mb-2">
        productId : {params.productId} - reviewId: {params.reviewId}
      </div>
      <Link href="/products/1/reviews">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To review page
        </div>
      </Link>
      <Link href="/products/1/reviews/1001">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To custom reviews not found page
        </div>
      </Link>
    </div>
  );
};

export default ReviewId;
