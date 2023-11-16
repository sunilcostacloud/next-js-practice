import Link from "next/link";

const CatchingAllRoutesHere = ({ params }: { params: { slug: string[] } }) => {
  //   console.log("params in catching all routes", params);
  // { slug: [ '1', '2', '3', 'abc', 'reviews', 'r' ] }
  return (
    <div>
      <div className="mb-2">Catching All Routes Here</div>

      {params.slug?.length === 2 ? (
        <div>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </div>
      ) : params.slug?.length === 1 ? (
        <div> Viewing docs for feature {params.slug[0]}</div>
      ) : (
        <div className="mb-2">{JSON.stringify(params.slug)}</div>
      )}

      <Link href="/">
        <div className="underline text-orange-500 hover:text-orange-700 mb-1">
          Go to Home
        </div>
      </Link>
    </div>
  );
};

export default CatchingAllRoutesHere;
