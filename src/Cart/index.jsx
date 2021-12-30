import React from "react";
import Header from "../Header";
import CartProduct from "./CartProduct";

const Cart = () => {
  return (
    <div>
      <Header title={"Корзина"} breadcrumbs={true} />
      <CartProduct />
    </div>
  );
};

export default Cart;
