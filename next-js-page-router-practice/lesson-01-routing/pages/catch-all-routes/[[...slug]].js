import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <div>catch-all-routes</div>
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

export default Index;
