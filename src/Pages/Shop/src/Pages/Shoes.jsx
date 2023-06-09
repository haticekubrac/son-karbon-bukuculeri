import {useState, useEffect} from "react";
import Card from '../Components/Card'
import { useLoaderData, useOutletContext } from 'react-router-dom'


export async function loader() {
    const data = await fetch("../../web-scraper/JSON/Shoes/scrapedDataShoes.json")
    const resp = await data.json()
    return resp
}


const Shoes = () => {
  const {searchParamsList} = useOutletContext()

  const [searchParams, setSearchParams] = searchParamsList;
  let search = searchParams.get("search")  
  const shoes = useLoaderData()
  const [filteredShoes, setFilteredShoes] = useState(shoes)
  
  useEffect(() => {
    search = searchParams.get("search")  
    setFilteredShoes(search ? shoes.filter((shoe) => shoe.title.toLocaleUpperCase().includes(search.toLocaleUpperCase() )): shoes)
  }, [searchParams.get("search")]);

  return (
    <main className='grid grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-10 py-10'>
      {filteredShoes.map(shoe => (
        <Card classNameImg={" p-5 sm:p-10 md:p-20 sm:w-[400px]"} key={shoe.id}  id={shoe.id} price={shoe.price}  productName={shoe.title} img={shoe.url} number={shoe.number}/>
      ))} 
    </main>
  )
}

export default Shoes