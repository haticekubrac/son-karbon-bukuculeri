import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import Loading from "../Loading";
import { Products } from "./Bottles";

export async function loader() {
  async function fetchData() {
    const fetchedData = await fetch(
      "/web-scraper/JSON/ClothBags/scrapedDataClothBags.json"
    );

    return await fetchedData.json();
  }
  return defer({ resp: fetchData() });
}

const ClothBags = () => {
  const clothBags = useLoaderData();

  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-10 py-10">
      <Suspense fallback={<Loading />}>
        <Await
          resolve={clothBags.resp}
          errorElement={<p>Error loading package location!</p>}
        >
          <Products shortText/>
        </Await>
      </Suspense>
    </main>
  );
};

export default ClothBags;
