import React from "react";
import Header from "../Header";

const Favorites = () => {
  const header = {
    title: "Избранное",
    link: [],
    return: true
  };
  return (
    <div>
      <Header header={header} />
    </div>
  );
};

export default Favorites;
