import React from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";

const Favorites = () => {
  return (
    <div>
      <Header />
      <CssBaseline />
      <ProductList />
    </div>
  );
};

export default Favorites;
