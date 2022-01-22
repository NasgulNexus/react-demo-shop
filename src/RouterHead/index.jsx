import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Favorites from "../Favorites";
import Catalog from "../Сatalog";
import Tables from "../Tables";
import Payment from "../Payment";

const RouterHead = () => (
  <div>
    <Routes>
      <Route path="/" element={<Catalog />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  </div>
);

export default RouterHead;
