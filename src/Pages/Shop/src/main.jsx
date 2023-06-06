import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./Layout"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>} path="/shop">
    
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
