import { useRouter } from "next/router";
import Link from "next/link";

const DynamicRouteWithId = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);
  const Id = router.query["dynamic-route-with-id"];

  return (
    <div>
      <div>Dynamic Route With Id : {Id} </div>
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

export default DynamicRouteWithId;
