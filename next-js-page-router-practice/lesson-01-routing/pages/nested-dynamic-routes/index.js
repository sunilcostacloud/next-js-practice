import React from "react";
import Link from "next/link";

const Index = () => {
  const clients = [
    {
      id: "max",
      name: "Maximilian",
    },
    {
      id: "manu",
      name: "Manuel",
    },
  ];
  return (
    <div>
      <div>nested-dynamic-routes</div>
      <div>
        <ul>
          <li>
            <Link href="/">Go to Home</Link>
          </li>
          {clients.map((client) => (
            <li key={client.id}>
              <Link href={`/nested-dynamic-routes/${client.id}`}>
                {client.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
