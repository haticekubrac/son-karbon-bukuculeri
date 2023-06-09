import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams, useOutletContext } from "react-router-dom";
import Card from "../Components/Card";

export async function loader() {
  const data = await fetch(
    "../../web-scraper/JSON/SuCo/scrapedDataSuCoBottles.json"
  );
  const resp = await data.json();
  return resp;
}

const Bottles = () => {
  const {searchParamsList} = useOutletContext()

  const [searchParams, setSearchParams] = searchParamsList;
  let search = searchParams.get("search")  
  const bottles = useLoaderData();
  const [filteredBottles, setFilteredBottles] = useState(bottles)
  
  useEffect(() => {
    search = searchParams.get("search")  
    setFilteredBottles(search ? bottles.filter((bottle) => bottle.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())): bottles)
  }, [searchParams.get("search")]);

  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-10 py-10 bg-gray-100">
      {filteredBottles.map((bottle) => (
        <Card
          key={bottle.id}
          id={bottle.id}
          price={bottle.price}
          productName={bottle.title}
          img={bottle.url}
        />
      ))}
    </main>
  );
};

export default Bottles;
