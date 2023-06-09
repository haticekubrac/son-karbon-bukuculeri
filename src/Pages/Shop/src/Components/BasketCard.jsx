import React from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const BasketCard = ({
  text,
  price,
  number,
  img,
  path,
  dispatchBasketProducts,
  imgClassName,
  textClassName,
  priceClassName,
  total,
}) => {
  return (
    <div className="flex relative items-center w-full flex-row py-5">
      <div className="flex-col flex items-center pr-5">
        <img
          src={img}
          className={`${
            imgClassName ? imgClassName : ""
          } w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-md`}
          alt="img"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h3
            className={`${
              textClassName ? textClassName : ""
            } text-black font-semibold text-[14px]`}
          >
            {text}
          </h3>
          <p
            className={`${priceClassName}  font-semibold text-orange-500 text-[14px]`}
          >
            {price}
          </p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className=" text-gray-500 flex flex-row items-center gap-2 border px-2 py-1 rounded-md sm:gap-4">
            <button
              onClick={() => {
                number > 1
                  ? dispatchBasketProducts({ type: "dec", path })
                  : dispatchBasketProducts({ type: "del", path });
              }}
            >
              <Minus size={14} weight="bold" />
            </button>
            <h4 className="text-[17px]">{number}</h4>
            <button
              onClick={() => {
                dispatchBasketProducts({ type: "inc", path });
              }}
            >
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <div className="flex flex-row">
            <button
              onClick={() => {
                dispatchBasketProducts({ type: "del", path });
              }}
              className="text-[15px] font-semibold text-gray-500"
            >
              Kaldır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
