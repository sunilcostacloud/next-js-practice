import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <div>This is a dynamic route</div>
      <div>
        <ul>
          <li>
            <Link href="/">Go to Home</Link>
          </li>
          <li>
            <Link href="/dynamic-route/123">Go to dynamic route with id</Link>
          </li>
          <li>
            <Link href="/dynamic-route/priority-dynamic-route">
              Go to priority-dynamic-route
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
