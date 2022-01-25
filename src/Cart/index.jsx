import React from "react";
import Header from "../Header";
import CartContent from "./CartContent";

const Cart = () => {
  return (
    <div>
      <Header title={"Корзина"} breadcrumbs={true} />
      <CartContent />
    </div>
  );
};

export default Cart;
