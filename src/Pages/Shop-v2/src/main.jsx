import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {
  ClothBags,
  Bottles,
  Shoes,
  Accessories,
  HomePage,
  ShopBasket,
  Login,
  Checkout,
  MainErrorPage,
  NotFound,
  Bottle,
  ClothBag,
  Shoe,
  SignUp
} from "./Pages/export";
import { loader as bottlesLoader } from "./Pages/product_pages/Bottles";
import { loader as clothBagsLoader } from "./Pages/product_pages/ClothBags";
import { loader as shoesLoader } from "./Pages/product_pages/Shoes";
import { loader as accessoriesLoader } from "./Pages/product_pages/Accessories";
import { loader as checkoutLoader } from "./Pages/Checkout";
import { loginAction } from "./Pages/Login";
import { signUpAction } from "./Pages/SignUp";
import { HomePageLoader } from "./Pages/HomePage";
import { checkoutAction } from "./Pages/Checkout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/" errorElement={<MainErrorPage />}>
      <Route index element={<HomePage />} loader={HomePageLoader} />
      <Route path="categories">
        <Route
          element={<ClothBags />}
          loader={clothBagsLoader}
          path="cloth-bags"
        />
        <Route element={<ClothBag />} loader={clothBagsLoader} path="cloth-bags/:id" />
        <Route element={<Shoes />} loader={shoesLoader} path="shoes" />
        <Route element={<Shoe />} loader={shoesLoader} path="shoes/:id" />
        <Route
          element={<Accessories />}
          loader={accessoriesLoader}
          path="accessories"
        />
        <Route element={<Bottles />} loader={bottlesLoader} path="bottles" />
        <Route element={<Bottle />} loader={bottlesLoader} path="bottles/:id" />
      </Route>
      <Route path="log-in" element={<Login />} action={loginAction} />
      <Route path="sign-up" element={<SignUp />} action={signUpAction} />
      <Route path="shop-basket">
        <Route index element={<ShopBasket />} />
        <Route path="checkout" element={<Checkout />} action={checkoutAction} loader={checkoutLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
