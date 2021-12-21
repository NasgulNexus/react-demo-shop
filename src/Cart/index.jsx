import React from "react";
import Header from "../Header";

const Cart = () => {
  const header = {
    title: "Корзина",
    link: [],
    return: true
  };
  return (
    <div>
      <Header header={header} />
    </div>
  );
};

export default Cart;
