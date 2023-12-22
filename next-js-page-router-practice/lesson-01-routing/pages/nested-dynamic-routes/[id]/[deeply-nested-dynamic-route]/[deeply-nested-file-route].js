import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>deeply-nested-file-route</div>;
};

export default Index;
