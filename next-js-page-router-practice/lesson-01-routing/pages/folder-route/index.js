import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <div>A folder inside pages is a route</div>
      <div>
        <ul>
          <li>
            <Link href="/">Go to Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
