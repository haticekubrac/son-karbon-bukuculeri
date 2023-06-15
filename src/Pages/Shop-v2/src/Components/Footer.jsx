import { useState } from "react";
import Logo from "/Logo.png";
import { Plus, Minus } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [openedList, setOpenedList] = useState({});

  return (
    <footer className="flex flex-col px-5 md:px-10 pt-10 gap-10 border-t-[1.5px] border-gray-300">
      {/* Navigation, Legal, Writing and Logo Section */}
      <div className="flex flex-col md:flex-row gap-5 md:items-center md:gap-20">
        {/* Brand Logo and Writing */}
        <div className="flex flex-col gap-5 md:w-2/3">
          <div className="flex flex-col w-[100px] justify-center items-center">
            <img src={Logo} alt="" className="w-[80px] h-[80px]" />
            <h1 className="font-bold text-[18px]">CarbonWise</h1>
          </div>
          {/* Writing Part */}
          <div className="flex flex-col gap-2 ">
            <h4 className="font-semibold text-[15px] md:text-[17px]">
              Daha Sürdürülebilir Dünya İçin...
            </h4>
            <p className="text-[15px] md:text-[17px] text-gray-500">
              Daha Sürdürülebilir Dünya İçin sloganına uygun olarak, çevre
              koruması, yenilikçilik ve farkındalık oluşturma ilkeleriyle
              hareket ediyoruz. Doğa dostu malzemeler kullanarak, enerji ve su
              tasarrufuna odaklanarak ve geri dönüşümü teşvik ederek
              sürdürülebilir ürünler sunuyoruz. Hedefimiz, insanları çevreye
              duyarlı alışkanlıklar edinmeye teşvik ederek küresel ölçekte bir
              etki yaratmak ve daha sürdürülebilir bir gelecek inşa etmektir.
            </p>
          </div>
        </div>

        {/* Navigation and Legal */}
        <div className="flex flex-col md:flex-row md:gap-40 ">
          {/* Navigation */}
          <div className="flex flex-col border-t md:border-none py-4  border-gray-300">
            {/* Label Text */}
            <div
              onClick={() =>
                setOpenedList((e) => ({
                  legal: false,
                  navigation: !e.navigation,
                }))
              }
              className="flex flex-row justify-between items-center w-full"
            >
              <h3 className="text-[14px] md:text-[17px] font-semibold">
                Navigasyon
              </h3>
              <Plus
                className={`${
                  openedList.navigation ? "opacity-0 hidden" : ""
                } md:hidden navbar-plus`}
                size={14}
                weight="bold"
              />
              <Minus
                className={`${
                  openedList.navigation ? "" : "opacity-0 hidden"
                } md:hidden`}
                size={14}
                weight="bold"
              />
            </div>
            {/* Links */}
            <div
              className={`${
                openedList.navigation ? "" : "hidden"
              } md:block pt-2`}
            >
              <ul className="list-none">
                <li>
                  <NavLink
                    to="/"
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                  >
                    Alişveriş Sayfası
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                    to="/categories/cloth-bags"
                  >
                    Bez Çantalar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                    to="/categories/shoes"
                  >
                    Ayakkabılar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                    to="/categories/bottles"
                  >
                    Mataralar
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Legal */}
          <div className="flex flex-col border-y md:border-none py-4 border-gray-300">
            {/* Label Text */}
            <div
              onClick={() =>
                setOpenedList((e) => ({ legal: !e.legal, navigation: false }))
              }
              className="flex flex-row justify-between items-center"
            >
              <h3 className="text-[14px] font-semibold md:text-[17px]">
                Legal
              </h3>
              <Plus
                className={`${
                  openedList.legal ? "hidden opacity-0" : ""
                } transition-opacity duration-500 md:hidden navbar-plus`}
                size={14}
                weight="bold"
              />
              <Minus
                className={`${
                  openedList.legal ? "" : "hidden opacity-0"
                }  md:hidden`}
                size={14}
                weight="bold"
              />
            </div>
            {/* Links */}
            <div
              className={`${openedList.legal ? "" : "hidden"} md:block md:pt-2`}
            >
              <ul className="list-none">
                <li>
                  <NavLink
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                    to="https://medium.com/search?q=Carbon+Footprint"
                  >
                    SSS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                    to=""
                  >
                    Hakkımızda
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:font-semibold md:text-[16px] cool-link text-[13px] text-gray-500"
                    to=""
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Socail Media Links and Accespted Credits */}
      <div className="flex flex-col gap-5">
        {/* Social Media Links */}
        <div className="flex flex-col">
          <h4 className="text-[13px] text-gray-500">Bizi Takip Edin</h4>
          <div className="flex flex-row items-center py-2 gap-2">
            <a>
              <i className="ri-twitter-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </a>
            <a>
              <i className="ri-instagram-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </a>
            <a>
              <i className="ri-youtube-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </a>
            <a>
              <i className="ri-pinterest-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </a>
          </div>
        </div>
        {/* We Accept */}
        {/* <div className="flex flex-col">
          <h4 className="text-[13px] text-gray-500">We Accept</h4>
          <div className="flex flex-row items-center py-2 gap-2">
            <div>
              <i className="ri-twitter-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </div>
            <div>
              <i className="ri-instagram-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </div>
            <div>
              <i className="ri-youtube-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </div>
            <div>
              <i className="ri-pinterest-fill text-[16px] bg-gray-400 text-white rounded-full p-[6px]"></i>
            </div>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="flex flex-col pb-5">
        <p className="text-[13px] leading-7 text-gray-500">
          © CarbonWise Shop <br />
          Website build by Son Web Bükücüleri
        </p>
      </div>
    </footer>
  );
};

export default Footer;
