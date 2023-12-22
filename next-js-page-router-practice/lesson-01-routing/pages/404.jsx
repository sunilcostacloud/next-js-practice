import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <div>This is a custom 404 page</div>
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

export default NotFoundPage;
