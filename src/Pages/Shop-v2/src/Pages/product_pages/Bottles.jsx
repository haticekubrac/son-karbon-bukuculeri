import { useState, useEffect, Suspense } from "react";
import {
  useLoaderData,
  useOutletContext,
  defer,
  Await,
  useAsyncValue,
} from "react-router-dom";
import Loading from "../Loading";
import Card from "../../Components/Card";


export async function loader() {
  async function fetchData() {
    const fetchedData = await fetch(
      "/web-scraper/JSON/SuCo/scrapedDataSuCoBottles.json"
    );

    return await fetchedData.json();
  }
  return defer({ resp: fetchData() });
}

const Bottles = () => {
  const bottles = useLoaderData();
  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-10 py-10 bg-gray-100">
      <Suspense fallback={<Loading />}>
        <Await
          resolve={bottles.resp}
          errorElement={<p>Error loading package location!</p>}
        >
          <Products />
        </Await>
      </Suspense>
    </main>
  );
};


export default Bottles;

export function Products({classNameImg = "", shortText = false}) {
  const products = useAsyncValue();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { searchParamsList } = useOutletContext();
  const [searchParams, setSearchParams] = searchParamsList;
  let search = searchParams.get("search");

  useEffect(() => {
    search = searchParams.get("search");
    setFilteredProducts(
      search
        ? products.filter((product) =>
            product.title
              .toLocaleUpperCase()
              .includes(search.toLocaleUpperCase())
          )
        : products
    );
  }, [searchParams.get("search")]);

  return (() =>
    filteredProducts.map((product) => (
      <Card
        key={product.id}
        id={product.id}
        price={product.price}
        productName={product.title}
        img={product.url}
        number={product.number}
        classNameImg={classNameImg}
        shortText
      />
    )))();
}

