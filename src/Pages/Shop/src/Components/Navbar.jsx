import Logo from "/Logo.png";
import { useState } from "react";
import {
  CaretDown,
  ShoppingCartSimple,
  List,
  X,
  User,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import {
  NavLink,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import BasketCard from "./BasketCard";
import { Form } from "react-router-dom";

export async function action({ request }) {
  let formData = await request.formData();
  const search = formData.get("email");
  const URL = new URL(request.url);
}

const Navbar = ({
  basketProducts,
  dispatchBasketProducts,
  setSearchParams,
  searchParams,
}) => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [shoppingCartOpened, setShoppingCardOpened] = useState(false);
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const pathname = useLocation().pathname;

  // find Total Value for each item then store in the list
  let totalValues = [];

  basketProducts.forEach((product) => {
    let total =
      product.number *
      product.price.replace(/[.]/g, "").replace(/[,]/g, ".").replace(/TL/, "");

    total = total.toFixed(2);
    totalValues.push(total);
  });

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <nav className="navbar w-full bg-white   flex flex-col p-3 lg:pl-5 gap-2 md:gap-5 lg:pr-[32px]">
      <div className="flex flex-row gap-2 sm:gap-5 md:gap-5 lg:gap-16 items-center z-30 ">
        {/* Left side of Top Navbar */}
        <div className="flex flex-row gap-[20px] md:gap-[80px] items-center w-full">
          <div className="flex flex-row items-center sm:gap-3 md:gap-7">
            {/* Hamburger Menu or screens that are smaller than lg */}
            <div className="relative sm:pl-3 lg:hidden">
              <button
                className="duration-500 relative"
                onClick={() => setHamburgerState((e) => !e)}
              >
                {!hamburgerState ? (
                  <List weight="bold" size={32}></List>
                ) : (
                  <X size={32} weight="bold" />
                )}
              </button>
              <ul
                id="hamburger-list"
                className={`list-none ${
                  hamburgerState ? "flex" : "hidden"
                }  flex-col lg:hidden z-10 absolute bg-white px-4 pr-10 rounded-2xl py-5 w-[150px]`}
              >
                <NavLink
                  onClick={() => setHamburgerState(false)}
                  to="/categories/cloth-bags"
                  className="cool-link py-2 hover:text-green-600 hover:font-semibold w-fit h-fit"
                >
                  Bez Çantalar
                </NavLink>
                <NavLink
                  onClick={() => setHamburgerState(false)}
                  to="/categories/shoes"
                  className="cool-link py-2 hover:text-green-600 hover:font-semibold"
                >
                  Ayakkabılar
                </NavLink>
                <NavLink
                  onClick={() => setHamburgerState(false)}
                  to="/categories/bottles"
                  className="cool-link py-2 hover:text-green-600 hover:font-semibold"
                >
                  Mataralar
                </NavLink>
              </ul>
            </div>
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center md:justify-normal  md:flex-row md:items-center md:gap-5"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:h-auto"
              />
              <div className="w-[70px] md:w-auto">
                <h1 className="font-bold text-[10px] md:text-[20px] text-center w-full md:w-auto">
                  CWShop
                </h1>
              </div>
            </NavLink>
          </div>
          {/* Top Search Bar */}
          <div className="hidden md:block w-full">
            <div
              id="search-bar"
              className="bg-white py-2 px-5 w-full border-solid shadow-md shadow-green-200 border-[1px] rounded-md border-[#c6c6c6]"
            >
              <input
                type="text"
                placeholder="Ara..."
                name="search"
                className="outline-none placeholder:text-[16px]  w-full"
                onChange={(e) => handleFilterChange("search", e.target.value)}
                value={searchParams.get("search") || ""}
              />
            </div>
          </div>
        </div>

        {/* Right side of Top Navbar */}
        <div className="flex flex-row items-center gap-4 lg:gap-16  ">
          <div className="md:hidden">
            <button onClick={() => setSearchClicked((e) => !e)}>
              <MagnifyingGlass size={32} />
            </button>
          </div>
          {/* Account Text Part lg Screens  */}
          <div className="hidden lg:flex flex-col justify-center min-w-[150px] items-center">
            <div>
              <h2 className="text-center text-[14px] font-semibold">
                <NavLink to="/log-in">Oturum Aç</NavLink>
              </h2>
            </div>
            <div
              onClick={() => setAccountOpen((e) => !e)}
              className="flex flex-col"
            >
              <div className="flex flex-row items-center gap-[6px] cursor-pointer">
                <h2 className="text-[16px] font-bold">Hesabım</h2>
                <CaretDown size={20} weight="bold" />
              </div>
            </div>
          </div>
          {/* Account Icon for small screens */}
          <div className="lg:hidden">
            <button onClick={() => setAccountOpen((e) => !e)}>
              <User size={32} />
            </button>
            <div className={`relative ${accountOpen ? "" : "hidden"}`}>
              <ul className="bg-white list-none shadow-lg absolute -left-8 rounded-xl">
                <li className="p-2  font-semibold w-[100px]">
                  <NavLink
                    className={"hover:text-green-400 w-[90px]"}
                    to="/log-in"
                  >
                    Oturum Aç
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Shop Basket Icon */}
          <div className="flex items-center ">
            <button onClick={() => setShoppingCardOpened((e) => !e)}>
              <ShoppingCartSimple size={32} />
            </button>
            <div className={`${shoppingCartOpened ? "realative" : "hidden"}`}>
              <div className="fixed	 flex flex-col top-[70px] sm:top-[90px] md:top-20 right-0 shadow-2xl z-10 bg-white rounded-md py-5 ">
                <div className="flex flex-col overflow-y-scroll h-screen  md:w-[400px] min-height-basket w-screen  md:h-60 px-5 py-5  divide-y">
                  {basketProducts.map((product) => (
                    <BasketCard
                      key={product.path}
                      text={product.text}
                      price={product.price}
                      path={product.path}
                      number={product.number}
                      img={product.img}
                      dispatchBasketProducts={dispatchBasketProducts}
                    />
                  ))}
                </div>
                <div className="border-t-2 pt-5 flex flex-col px-5 gap-7">
                  <div className="flex flex-row justify-between">
                    <h4 className="font-semibold text-[16px]">Toplam</h4>
                    <h4 className="font-semibold text-[16px]">
                      {`${totalValues.reduce(
                        (accumulator, currentValue) =>
                          accumulator + Number(currentValue),
                        0
                      ).toFixed(2)}`.replace(/[.]/g, ",")}{" "}
                      TL
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <button
                      onClick={() => {
                        navigate("/shop-basket");
                        setShoppingCardOpened(false);
                      }}
                      className="bg-black text-white hover:opacity-70 font-semibold p-3 px-4 rounded-sm"
                    >
                      Sepeti Görüntüle
                    </button>
                    <button
                      onClick={() => navigate("/shop-basket/checkout")}
                      className="bg-orange-600 opacity-90 text-white hover:opacity-70 font-semibold p- px-4 rounded-sm"
                    >
                      Ödeme Yap
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar For Small Screens */}
      <div className={`w-full ${searchClicked ? "" : "hidden"} md:hidden`}>
        <div
          id="search-bar"
          className="bg-white py-2 px-5 w-full border-solid rounded-md border-[1px] border-[#636363]"
        >
          <input
            type="text"
            placeholder="Ara..."
            name="search"
            className="outline-none placeholder:text-[16px]  w-full"
            onChange={(e) => handleFilterChange("search", e.target.value)}
            value={searchParams.get("search") || ""}
          />
        </div>
      </div>

      {/* Navigation Links Bottom Part for Larger Screens */}
      <div className="hidden lg:flex flex-row overflow-visible">
        <ul className="list-none list-outside flex overflow-visible flex-row gap-40 pl-20">
          <NavLink
            to="/categories/cloth-bags"
            className={({ isActive }) =>
              `cool-link hover:text-green-600 hover:font-semibold `
            }
          >
            Bez Çantalar
          </NavLink>
          <NavLink
            to="/categories/shoes"
            className={({ isActive }) =>
              `cool-link hover:text-green-600 hover:font-semibold `
            }
          >
            Ayakkabılar
          </NavLink>
          <NavLink
            to="/categories/bottles"
            className={({ isActive }) =>
              `cool-link hover:text-green-600 hover:font-semibold `
            }
          >
            Mataralar
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
