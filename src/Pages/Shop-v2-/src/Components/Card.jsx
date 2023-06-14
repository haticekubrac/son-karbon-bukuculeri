import React, { useRef } from "react";
import { Plus } from "@phosphor-icons/react";
import { useOutletContext, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Card = ({
  productName,
  price,
  img,
  id,
  classNameImg,
  classNameImgContainer,
  noPath = false,
  shortText,
  shortCard 
}) => {
  const { basket } = useOutletContext();
  const [basketProducts, dispatchBasketProducts] = basket;
  const location = useLocation();
  const path = noPath ? "/categories/bottles" : location.pathname;
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
        `min-w-[125px] sm:min-w-[200px] lg:min-w-[300px] flex flex-col pb-6 z-1 m-auto ${shortCard ? "overflow-hidden text-ellipsis whitespace-nowrap" : ""}`
      }
    >
      {/* Card Top and Img Part */}
      <div
        className={`${
          classNameImgContainer ? classNameImgContainer : ""
        }  pb-5`}
      >
        <img
          src={img}
          className={`rounded-md w-full ${classNameImg ? classNameImg : ""}`}
          alt="img"
        />
        {/* Button to Add To Shop Basket */}
        <div className={`xsm:relative xsm:block hidden`}>
          <button
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseOut}
            ref={addButtonRef}
            onClick={() => {
              dispatchBasketProducts({
                text: productName,
                price,
                number: 1,
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
      <NavLink
        className={"hover:text-orange-600"}
        to={noPath ? "/categories/bottles/" + id : path + "/" + id}
      >
        <div className="flex flex-col items-start">
          <h3 className={`text-[14px] font-semibold sm:text-[17px] ${shortText ? `productname-span ${shortCard ? "lg:w-[260px] xl:w-[290px] md:w-[190px] sm:w-[190px] xsm:w-[130px]" : "lg:w-[310px] xl:w-[400px] md:w-[350px] sm:w-[270px] xsm:w-[180px]"}   w-[100px]` : ""}`} >
            {productName}
          </h3>
          <p className="text-[14px] text-gray-500 sm:text-[17px]">{price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
