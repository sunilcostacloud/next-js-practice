import React from "react";
import Link from "next/link";

const basicroute = () => {
  return (
    <div>
      <div>A file name inside page can also be a route</div>
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

export default basicroute;
