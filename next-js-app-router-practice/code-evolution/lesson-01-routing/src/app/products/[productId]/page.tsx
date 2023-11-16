import Link from "next/link";
import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  //   console.log("params", params);
  return (
    <>
      <div className="mb-2">ProductDetails : {params.productId}</div>
      <Link href="/products">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To Products
        </div>
      </Link>
      <Link href="/products/1/reviews">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go To Reviews Page
        </div>
      </Link>
    </>
  );
};

export default ProductDetails;
