import {useState, useEffect} from "react";
import Card from "../Components/Card";
import { useLoaderData, useSearchParams } from 'react-router-dom'

export async function loader() {
  const data = await fetch("../../web-scraper/JSON/scrapedDataTechAccessories.json");
  const resp = await data.json();
  return resp;
}


const Accessories = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const bottles = useLoaderData();
  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-10 py-10">
      {bottles.map((accessory) => (
        <Card
          key={accessory.id}
          id={accessory.id}
          price={accessory.price}
          productName={accessory.title}
          img={accessory.url}
        />
      ))}
    </main>
  );
};

export default Accessories;
