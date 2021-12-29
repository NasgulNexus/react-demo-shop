import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteFromCart, addToCart, decrementCart } from "../actions/cart";

const ButtonCart = ({ productId, index, count }) => {
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
          dispatch(addToCart(index));
          event.stopPropagation();
        }}
      >
        +
      </Button>
      <Typography>{count}</Typography>
      <Button
        size="small"
        onClick={event => {
          dispatch(decrementCart(index));
          event.stopPropagation();
        }}
      >
        -
      </Button>
    </div>
  );
};

export default ButtonCart;
