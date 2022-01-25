import React from "react";
import Header from "../Header";
import FavoritesContent from "./FavoritesContent";

const Favorites = () => {
  return (
    <div>
      <Header title={"Избранное"} breadcrumbs={true} />
      <FavoritesContent />
    </div>
  );
};

export default Favorites;
