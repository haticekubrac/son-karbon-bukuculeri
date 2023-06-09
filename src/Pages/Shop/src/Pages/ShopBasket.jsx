import React, { useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BasketCard from "../Components/BasketCard";

const ShopBasket = () => {
  const { basket } = useOutletContext();
  const [basketProducts, dispatchBasketProducts] = basket;
  const navigate = useNavigate();
  let totalValues = [];

  basketProducts.forEach((product) => {
    let total =
      product.number *
      product.price.replace(/[.]/g, "").replace(/[,]/g, ".").replace(/TL/, "");

    total = total.toFixed(2);
    totalValues.push(total);
  });

  console.log(totalValues);

  return (
    <main className="flex flex-col md:px-10 bg-gray-100 py-10">
      {/* Spetim Text */}
      <div>
        <h1 className="font-semibold px-5 text-[25px] md:text-[28px]">Sepet</h1>
      </div>
      {/* Sepetteki Ürünler */}
      {JSON.stringify(basketProducts) != JSON.stringify([]) ? (
        <div>
          <div className="flex flex-col px-5">
            {console.log(
              typeof basketProducts,
              JSON.stringify(basketProducts),
              JSON.stringify([])
            )}
            {basketProducts.map((product) => (
              <BasketCard
                key={product.path}
                text={product.text}
                price={product.price}
                path={product.path}
                number={product.number}
                img={product.img}
                dispatchBasketProducts={dispatchBasketProducts}
                imgClassName={
                  "md:w-[120px] lg:w-[140px] md:h-[120px] lg:h-[140px]"
                }
                textClassName={"md:text-[18px] lg:text-[19px]"}
                priceClassName={"md:text-[16px]"}
                total={true}
              />
            ))}
          </div>
          <div className="border-t-2 pt-5 flex flex-col px-5 gap-7">
            <div className="flex flex-row justify-between">
              <h4 className="font-semibold text-[16px] md:text-[18px]">
                Toplam
              </h4>
              <h4 className="font-semibold text-[16px] md:text-[18px]">
                {`${totalValues.reduce(
                  (accumulator, currentValue) => (accumulator) + Number(currentValue),
                  0
                ).toFixed(2)}`.replace(/[.]/g, ",")}{" "}
                TL
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => navigate("/shop-basket/checkout")}
                className="bg-orange-600 py-2 w-full sm:w-1/3 opacity-90 text-[14px] rounded-xl md:text-[16px] text-white hover:opacity-70 font-semibold p- px-4 md:rounded-lg"
              >
                Ödeme Yap
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-semibold text-[14px] pt-10 px-5 md:text-[16px]">
          Sepetinizde güncel olarak herhangi bir ürün bulunmamaktadır.
        </div>
      )}
    </main>
  );
};

export default ShopBasket;
