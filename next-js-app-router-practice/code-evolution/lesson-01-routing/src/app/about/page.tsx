import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="mb-2">This is About page</div>
      <Link href="/">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Home
        </div>
      </Link>
    </div>
  );
};

export default About;
