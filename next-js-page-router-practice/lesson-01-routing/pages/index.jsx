import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div>This is a home page</div>
      <div>
        <ul>
          <li>
            <Link href="/fileroute">Go to file route</Link>
          </li>
          <li>
            <Link href="/folder-route">Go to folder route</Link>
          </li>
          <li>
            <Link href="/dynamic-route">Go to dynamic route</Link>
          </li>
          <li>
            <Link href="/nested-dynamic-routes">
              Go to nested dynamic routes
            </Link>
          </li>
          <li>
            <Link href="/catch-all-routes">go to catch-all-routes</Link>
          </li>
          <li>
            <button onClick={() => router.push("/catch-all-routes/123/jdksf")}>
              go to nested catch-all-routes
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
