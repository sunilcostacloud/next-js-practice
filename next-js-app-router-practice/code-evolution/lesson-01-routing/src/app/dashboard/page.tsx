import React from "react";
import LineChart from "./line-chart";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <LineChart />
      <br />
      <Link href="/">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Home
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
