import React, { useEffect, useState } from "react";
import { requireAuth } from "../requireAuth";
import { useOutletContext } from "react-router-dom";

export async function loader({ request }) {
  await requireAuth(request);
  return "";
}

const Checkout = () => {
  const { basket } = useOutletContext();
  const [basketProducts, dispatchBasketProducts] = basket;
  const [firstProducts, setFirstProducts] = useState(basketProducts)
  

  useEffect(() => {
    if (JSON.stringify(basketProducts) !== "[]") {
      console.log("clearing started")
      dispatchBasketProducts({ type: "clear" });
    }
  }, []);

  return (
    <main className="bg-gray-100 py-24 md:py-24 px-2 md:px-4 flex flex-col gap-5 text-center">
      {JSON.stringify(firstProducts) !== "[]" ? (
        <div>
          <h2 className="font-semibold text-[20px]">
            🥳 Siparişiniz alınmıştır. Tahmini varış süresi 3 gündür.
          </h2>
          <h2 className="font-semibold text-[20px]">Yine Bekleriz &#128075;</h2>
        </div>
      ) : (
        <div>
          <h2 className="font-semibold text-[20px]">
           Sipariş edebilmeniz için önce sepetinizde ürün olması gerekmektedir. Lütfen sepetinize ürün ekleyin.
          </h2>
        </div>
      )}
    </main>
  );
};

export default Checkout;
