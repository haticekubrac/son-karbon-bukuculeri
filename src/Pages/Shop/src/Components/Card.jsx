import React, { useRef } from "react";
import { Plus } from "@phosphor-icons/react";
import { useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Card = ({
  productName,
  price,
  img,
  id,
  classNameImg,
  classNameImgContainer,
}) => {
  const { basket } = useOutletContext();
  const [basketProducts, dispatchBasketProducts] = basket;
  const location = useLocation();
  const path = location.pathname;
  const addButtonRef = useRef(null);

  function handleMouseEnter() {
    addButtonRef.current.classList.remove("opacity-0");
  }

  function handleMouseOut() {
    addButtonRef.current.classList.add("opacity-0");
  }

  return (
    <div
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseOut}
      className={
        "min-w-[125px] sm:min-w-[200px] lg:min-w-[300px] flex flex-col pb-6 z-1 m-auto"
      }
    >
      {/* Card Top and Img Part */}
      <div className={`${classNameImgContainer}  pb-5`}>
        <img
          src={img}
          className={`rounded-md w-full ${classNameImg}`}
          alt="img"
        />
        {/* Button to Add To Shop Basket */}
        <div className={`relative`}>
          <button
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseOut}
            ref={addButtonRef}
            onClick={() => {
              dispatchBasketProducts({
                text: productName,
                price,
                img,
                type: "add",
                path: path + "/" + id,
              });
            }}
            className="absolute z-0 opacity-0  flex-row flex card-button-opacity-trasnsition items-center text-[10px] sm:text-[14px]  p-2 -bottom-2 sm:p-4 sm:bottom-2 sm:left-2  hover:opacity-40  text-white bg-gray-700 rounded-3xl gap-1 shadow-2xl"
          >
            <div className="flex pt-1 items-center">
              <Plus size={14} />
            </div>
            Sepete Ekle
          </button>
        </div>
      </div>
      {/* Card Bottom and Info Part */}
      <div className="flex flex-col items-start">
        <h3 className="text-[14px]  font-semibold sm:text-[17px] ">
          {productName}
        </h3>
        <p className="text-[14px] text-gray-500 sm:text-[17px]">{price}</p>
      </div>
    </div>
  );
};

export default Card;
