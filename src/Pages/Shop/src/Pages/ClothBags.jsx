import {useState, useEffect} from "react";
import Card from "../Components/Card";
import { useLoaderData, useSearchParams, useOutletContext } from "react-router-dom";

export async function loader() {
  const data = await fetch(
    "../../web-scraper/JSON/ClothBags/scrapedDataClothBags.json"
  );
  const resp = await data.json();
  return resp;
}

const ClothBags = () => {
  const {searchParamsList} = useOutletContext()

  const [searchParams, setSearchParams] = searchParamsList;
  let search = searchParams.get("search")  
  const clothBags = useLoaderData();
  const [filteredClothBags, setFilteredClothBags] = useState(clothBags)
  
  useEffect(() => {
    search = searchParams.get("search")  
    setFilteredClothBags(search ? clothBags.filter((clothBag) => clothBag.title.includes(search)): clothBags)
  }, [searchParams.get("search")]);

  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-10 py-10">
      {filteredClothBags.map((clothBag) => (
        <Card
          key={clothBag.id}
          id={clothBag.id}
          price={clothBag.price}
          productName={clothBag.title}
          img={clothBag.url}
        />
      ))}
    </main>
  );
};

export default ClothBags;
