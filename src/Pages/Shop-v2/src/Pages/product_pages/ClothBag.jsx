import React from "react";
import {
  Await,
  useLoaderData,
} from "react-router-dom";
import { Suspense } from "react";
import Loading from "../Loading";
import { Product } from "./Shoe";


const ClothBag = () => {
  const clothBags = useLoaderData();

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={clothBags.resp}
          errorElement={<p>Error loading package location!</p>}
        >
          <Product />
        </Await>
      </Suspense>
    </main>
  );
};

export default ClothBag