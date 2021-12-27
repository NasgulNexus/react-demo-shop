import React from "react";
import Header from "../Header";
import TablesProduct from "./TablesProduct";

const Tables = () => {
  return (
    <div>
      <Header title={"Корзина"} bradCrumbs={true} />
      <TablesProduct />
    </div>
  );
};

export default Tables;
