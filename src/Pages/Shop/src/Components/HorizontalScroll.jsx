import { useRef } from "react";
import Card from "./Card";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";

const HorizontalScroll = ({ header, paragraph, data }) => {
  const scrollHorizontalContainer = useRef(null);

  function scrollRight() {
    if (window.innerWidth > 1000) {
      scrollHorizontalContainer.current.scrollLeft += 320;
    } else {
      scrollHorizontalContainer.current.scrollLeft += 220;
    }
  }

  function scrollLeft() {
    if (window.innerWidth > 1000) {
      scrollHorizontalContainer.current.scrollLeft -= 320;
    } else {
      scrollHorizontalContainer.current.scrollLeft -= 220;
    }
  }

  return (
    <div className="flex-col flex gap-10 px-5 md:px-10 justify-center">
      {/* Top and Infor Part of Horizontal Scroll */}
      <div className="flex flex-col">
        <h2 className="font-bold text-[24px] sm:text-[30px]">{header}</h2>
        <p className="font-semibold max-w-[800px] text-[12px] sm:text-[16px]">
          {paragraph}
        </p>
      </div>
      <div className="flex-col flex justify-center relative w-full">
        {/* Bottom Part and Products in Horizontal Scroll */}
        <div
          id="scroll-hor-con"
          ref={scrollHorizontalContainer}
          className="flex scroll-smooth flex-row flex-nowrap gap-5 overflow-x-scroll scrollbar-hide"
        >
          {[
            {
              title: "Water SuCo - 600 ml",
              url: "https://cdn.shopify.com/s/files/1/0811/0945/products/water-on.jpg?v=1671782266&width=1200",
              price: "235,00TL",
              id: 53,
            },
            {
              title: "Make A Wish Ocean SuCo - 600 ml",
              url: "https://cdn.shopify.com/s/files/1/0811/0945/products/make-a-wish-suco-website.jpg?v=1679399621&width=1200",
              price: "255,00TL",
              id: 54,
            },
          ].map((element, index) => {
            <Card
              key={index}
              price={element.price}
              productName={element.title}
              img={element.url}
            />;
          })}
        </div>
        <div className="hidden sm:block absolute w-full">
          <div className="absolute inset-y-0 left-2  -top-10 ">
            <button
              onClick={scrollLeft}
              className="absolute p-2 rounded-full hover:bg-gray-200 bg-white shadow-md"
            >
              <CaretLeft size={32} color="#1a2c60" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-14 -top-10">
            <button
              onClick={() => scrollRight()}
              className="absolute p-2 rounded-full hover:bg-gray-200 bg-white shadow-md "
            >
              <CaretRight size={32} color="#1a2c60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
