import React from "react";
import ProductList from "./ProductList/index.jsx";
import Header from "../Header";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div>
      <Header
        menu={[
          <Button component={Link} variant="text" to="/favorites">
            Избранное
          </Button>,
          <Button component={Link} variant="text" to="/tables">
            Таблица сравнения
          </Button>
        ]}
        bradCrumbs={false}
      />
      <ProductList />
    </div>
  );
};

export default Favorites;
