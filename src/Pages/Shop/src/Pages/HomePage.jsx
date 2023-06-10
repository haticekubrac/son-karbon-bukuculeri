import React from "react";
import { CaretRight } from "@phosphor-icons/react";
import Case from "/mac-box.png";
import HorizontalScroll from "../Components/HorizontalScroll";
import Footer from "../Components/Footer";
import { NavLink, useLoaderData } from "react-router-dom";

export async function HomePageLoader() {
  const firstScrollDataFetch = await fetch("../../web-scraper/JSON/SuCo/scrapedDataFirstHorScroll.json")
  const firstScrollData = await firstScrollDataFetch.json()
  const secondScrollDataFetch = await fetch("../../web-scraper/JSON/SuCo/scrapedDataSecondHorScroll.json")
  const secondScrollData = await secondScrollDataFetch.json()
  return {firstScrollData, secondScrollData}
}



const HomePage = () => {
  const {firstScrollData, secondScrollData} = useLoaderData()
 
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
              <p className="w-3/4 text-white font-semibold text-[14px] md:text-[16px] ">
                Karbon Sıfır Ürünleri ile adını duyuran SuCo,
                yenilikçi yaklaşımıyla doğal kaynakları korumayı ve karbon ayak
                izini azaltmayı hedeflemektedir. SuCo'nun bu ürünleri,
                sürdürülebilir malzemelerden üretilmiş olup, geri
                dönüştürülebilir ve doğaya zarar vermeden çözünebilir
                özelliklere sahiptir.
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
                <p className="w-3/4 text-white font-semibold text-[14px] sm:text-[16px] lg:text-[14px]">
                  CWS'nin bez çantaları, doğal kaynakları korumayı ve karbon
                  emisyonunu azaltmayı amaçlayan yenilikçi bir yaklaşımla
                  tasarlanmıştır. Üretim sürecinden başlayarak tüketiciye
                  ulaşana kadar her adımda karbon ayak izini en aza indirmek
                  için çalışılmıştır.
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
                <p className="w-2/3 text-white font-semibold text-[14px] sm:text-[16px] lg:text-[14px]">
                  CWS Ayakkabıları, üretim sürecinden itibaren karbon emisyonunu
                  en aza indirmek için özenle tasarlanmıştır. Sürdürülebilir
                  malzemeler kullanılarak üretilen ayakkabılar, geri
                  dönüştürülebilme özelliğine
                  sahiptir.
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
        <HorizontalScroll
          header={"Müşterilerin Tercihi"}
          paragraph={
            "Müşterilerimiz tarafından en çok tercih edilen aşağıda sıralanmıştır. Alttaki ürünler, aradıklarınızı daha hızlı bulmanızı sağlayabilir."
          }
          bottles={firstScrollData}
        />
        <HorizontalScroll
          header={"Tasarımcılarımızın Önerdikleri"}
          paragraph={
            "Aşağıda gördükleriniz tasarımcılarımız tarafından en çok beğenilen ürünlerden oluşmaktadır. Tasarımcılarımızın bu ürünleri seçerken kalite, ömrü, renk kalitesi ve daha pek çok özelliği dikkate almıştır."
          }
          bottles={secondScrollData}
        />
      </div>
    </main>
  );
};

export default HomePage;
