import React from "react";
import ProductList from "./ProductList/index.jsx";
import Header from "../Header";

const Favorites = () => {
  const header = {
    title: "",
    link: [
      { id: 0, to: "/favorites", title: "Избранное" },
      { id: 1, to: "/tables", title: "Таблица сравнения" }
    ],
    return: false
  };
  return (
    <div>
      <Header header={header} />
      <ProductList />
    </div>
  );
};

export default Favorites;
