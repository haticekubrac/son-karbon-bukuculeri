import React from "react";
import { CaretRight } from "@phosphor-icons/react";
import Case from "/mac-box.png";
import HorizontalScroll from "../Components/HorizontalScroll";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";


const HomePage = () => {
  return (
    <main className="bg-gray-100">
      {/* Showcases */}
      <div
        id="showcase"
        className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-10 px-[24px]  md:px-[48px] pt-[16px] gap-5"
      >
        {/* Left Showcase */}
        <div
          className="left-showcase-img rounded-3xl overflow-clip min-showcase-img  left-showcase-img bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0811/0945/products/denizde-mavi.jpg?v=1671793180&width=800')]"
          id="left-showcase-img"
        >
          {/* Color Overlay front of the image */}
          <div className="bg-[#153337]/[.57] w-full h-full flex flex-col p-5">
            {/* Title */}
            <h2 className="sm:text-[36px] text-[22px] text-white font-bold">
              SuCo Mataraları <br /> Karbon Sıfır Ürünler
            </h2>
            {/* Paragraph */}
            <div className="flex flex-col m-auto">
              <p className="w-3/4 text-white font-semibold sm:text-[16px] text-[12px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti eligendi magnam neque, quos qui at voluptates alias
                ipsum incidunt, reiciendis esse reprehenderit voluptatibus?
                Officiis doloremque et earum, architecto vero vitae.
              </p>
            </div>
            {/* Link To Section */}
            <div className="flex items-end flex-col m-auto w-full hover:underline hover:decoration-4 transition-color  hover:decoration-gray-50">
              <div className="text-white flex flex-row items-end">
                <h2 className="text-[24px] font-bold flex h-auto">
                <NavLink to="/categories/bottles">Sayfaya Git</NavLink>
                </h2>
                <div className="flex items-center">
                  <CaretRight size={32} weight="bold" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Showcases */}
        <div className="lg:grid lg:grid-rows-2 flex flex-col gap-3">
          {/* Top-Right Showcase */}
          <div
            id="top-right-showcase"
            className={`rounded-3xl overflow-clip min-showcase-img right-showcase-img bg-cover bg-[url('/ClothBag.png')]`}
          >
            {/* Color Overlay front of the image */}
            <div className="bg-[#4E0786]/[.39] w-full h-full flex flex-col p-5">
              {/* Title */}
              <h2 className="sm:text-[25px] text-white font-bold text-[22px]">
                CWS Bez Çantaları <br /> Karbon Sıfır Ürünler
              </h2>
              {/* Paragraph */}
              <div className="flex flex-col m-auto">
                <p className="w-3/4 text-white font-semibold sm:text-[14px] text-[12px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti eligendi magnam neque, quos qui at voluptates alias
                  ipsum incidunt, reiciendis esse reprehenderit voluptatibus?
                </p>
              </div>
              {/* Link To Section */}
              <div className="flex items-end flex-col m-auto w-full hover:underline hover:decoration-4 transition-color  hover:decoration-gray-50">
                <div className="text-white flex flex-row items-end">
                  <h2 className="text-[24px] font-bold flex h-auto">
                  <NavLink to="/categories/cloth-bags">Sayfaya Git</NavLink>
                  </h2>
                  <div className="flex items-center">
                    <CaretRight size={32} weight="bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom-Right Showcase */}
          <div
            id="bottom-right-showcase"
            className={`rounded-3xl overflow-clip bg-cover min-showcase-img right-showcase-img bg-[url('https://www.mizunotr.com/wave-revolt-erkek-kosu-yuruyus-ayakkabilari-mizuno-6329-30-K.jpg')]`}
          >
            {/* Color Overlay front of the image */}
            <div className="bg-[#560000]/[.57] w-full h-full flex flex-col p-5">
              {/* Title */}
              <h2 className="sm:text-[25px] text-[22px] text-white font-bold">
                CWS Ayakkabıları <br /> Karbon Sıfır Ürünler
              </h2>
              {/* Paragraph */}
              <div className="flex flex-col m-auto">
                <p className="w-2/3 text-white font-semibold sm:text-[14px] text-[12px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti eligendi magnam neque, quos qui at voluptates alias
                  ipsum incidunt, reiciendis esse reprehenderit voluptatibus?
                </p>
              </div>
              {/* Link To Section */}
              <div className="flex items-end flex-col m-auto w-full hover:underline hover:decoration-4 transition-color  hover:decoration-gray-50">
                <div className="text-white flex flex-row items-end">
                  <h2 className="sm:text-[24px] text-[20px] font-bold flex h-auto">
                    <NavLink to="/categories/shoes">Sayfaya Git</NavLink>
                  </h2>
                  <div className="flex items-center">
                    <CaretRight size={32} weight="bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-36 py-20">
        <HorizontalScroll header={"Müşterilerin Tercihi"} paragraph={"Müşterilerimiz tarafından en çok tercih edilen aşağıda sıralanmıştır. Alttaki ürünler, aradıklarınızı daha hızlı bulmanızı sağlayabilir."} />
        <HorizontalScroll header={"Tasarımcılarımızın Önerdikleri"} paragraph={"Aşağıda gördükleriniz tasarımcılarımız tarafından en çok beğenilen ürünlerden oluşmaktadır. Tasarımcılarımızın bu ürünleri seçerken kalite, ömrü, renk kalitesi ve daha pek çok özelliği dikkate almıştır."} />
      </div>
    </main>
  );
};

export default HomePage;
