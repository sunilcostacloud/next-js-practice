import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <div className="mb-2">Products List</div>
      <Link href="/">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Home
        </div>
      </Link>
      <Link href="/products/1">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Product 1
        </div>
      </Link>
      <Link href="/products/2">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Product 2
        </div>
      </Link>
      <Link href="/products/specialroute">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to special route
        </div>
      </Link>
    </div>
  );
};

export default Products;
