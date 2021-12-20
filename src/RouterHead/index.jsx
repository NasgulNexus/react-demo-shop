import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Favorites from "../Favorites";
import ProductShop from "../ProductShop";
import Tables from "../Tables";

const RouterHead = () => (
  <div>
    <Routes>
      <Route path="/" element={<ProductShop />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
    </Routes>
  </div>
);

export default RouterHead;
