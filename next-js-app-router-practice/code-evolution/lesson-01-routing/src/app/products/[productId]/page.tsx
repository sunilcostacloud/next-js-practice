import Link from "next/link";
import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// generateMetadata can also be an async function

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
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
