import React from "react";
import Header from "../Header";
import FavoritesProduct from "./FavoritesProduct";

const Favorites = () => {
  return (
    <div>
      <Header title={"Избранное"} breadcrumbs={true} />
      <FavoritesProduct />
    </div>
  );
};

export default Favorites;
