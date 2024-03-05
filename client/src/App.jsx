import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { lazy } from "react";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";

//const HomePage = lazy(() => import("./pages/HomePage"));
//const Cart = lazy(() => import("./pages/Cart"));
//const Shops = lazy(() => import("./pages/Shops"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index path="shops" element={<Shops />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </div>
  );
};
