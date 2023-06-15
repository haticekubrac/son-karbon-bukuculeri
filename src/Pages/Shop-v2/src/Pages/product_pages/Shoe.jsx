import React, { useState } from "react";
import {
  useParams,
  Await,
  useAsyncValue,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { Suspense } from "react";
import Loading from "../Loading";

const Shoe = () => {
  const shoes = useLoaderData();

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={shoes.resp}
          errorElement={<p>Error loading package location!</p>}
        >
          <Product />
        </Await>
      </Suspense>
    </main>
  );
};

export default Shoe;

import { Minus, Plus } from "@phosphor-icons/react";
import { useOutletContext } from "react-router-dom";

export function Product() {
  const products = useAsyncValue();
  const { id } = useParams();
  const product = products[id];
  const [number, setNumber] = useState(0);
  const { basket } = useOutletContext();
  const [basketProducts, dispatchBasketProducts] = basket;
  const path = useLocation().pathname;
  return (
    <main className="flex flex-col p-4 gap-10 lg:gap-5 items-center py-10">
      {/* Product Title */}
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[24px] w-full text-center md:w-2/3">
          {product.title}
        </h1>
      </div>
      <div className="sm:flex sm:flex-row space-y-10 sm:space-y-0 gap-10 justify-center sm:py-10">
        {/* Product Img */}
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img className="rounded-md" src={product.url} alt="" />
        </div>
        <div className="sm:flex-col justify-center sm:flex gap-10">
          <div className="py-3 px-2 w-full">
            <h3 className="text-[18px] flex flex-row gap-10 pr-10">
              <span className="font-semibold">Fiyat:</span>
              <span className="text-orange-600 w-full font-semibold">{product.price}</span>
            </h3>
          </div>
          <div className=" text-gray-500 flex flex-row items-center justify-between gap-2 border px-16 py-1 rounded-md sm:gap-4">
            <button
              onClick={() => {
                setNumber((e) => {
                  if (e > 0) {
                    return e - 1;
                  } else {
                    return 0;
                  }
                });
              }}
            >
              <Minus size={18} weight="bold" />
            </button>
            <h4 className="text-[20px]">{number}</h4>
            <button
              onClick={() => {
                setNumber((e) => e + 1);
              }}
            >
              <Plus size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="py-2 w-full md:w-1/2 lg:w-1/3">
        <button
          onClick={() => {
            dispatchBasketProducts({
              text: product.title,
              price: product.price,
              img: product.url,
              type: "add",
              path,
              number,
            });
          }}
          className="bg-slate-900 opacity-90 text-white hover:opacity-70 w-full font-semibold py-2 px-4 rounded-md"
        >
          Sepete Ekle
        </button>
      </div>
    </main>
  );
}
