import React from "react";
import ProductList from "./ProductList/index.jsx";
import Header from "../Header";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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
          </Button>,
          <IconButton component={Link} variant="text" to="/cart">
            <ShoppingCartIcon color="primary" />
          </IconButton>
        ]}
      />
      <ProductList />
    </div>
  );
};

export default Favorites;
