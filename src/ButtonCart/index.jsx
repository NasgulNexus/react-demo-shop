import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteFromCart, addToCart, decrementCart } from "../actions/cart";

const ButtonCart = ({ productId, count }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        size="small"
        onClick={event => {
          dispatch(deleteFromCart(productId));
          event.stopPropagation();
        }}
      >
        Удалить из корзины
      </Button>
      <Button
        size="small"
        onClick={event => {
          dispatch(addToCart(productId));
          event.stopPropagation();
        }}
      >
        +
      </Button>
      <Typography>{count}</Typography>
      <Button
        size="small"
        onClick={event => {
          dispatch(decrementCart(productId));
          event.stopPropagation();
        }}
      >
        -
      </Button>
    </div>
  );
};

export default ButtonCart;
