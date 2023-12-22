import React from "react";
import Link from "next/link";

const PriorityDynamicRoute = () => {
  return (
    <div>
      <div>Priority Dynamic Route</div>
      <div>
        <ul>
          <li>
            <Link href="/dynamic-route">Go to dynamic-route</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriorityDynamicRoute;
