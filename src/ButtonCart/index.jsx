import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteFromCart, addToCart, decrementCart } from "../actions/cart";
import { Grid } from "@mui/material";

const ButtonCart = ({ productId, count }) => {
  const dispatch = useDispatch();
  return (
    <Grid container>
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
    </Grid>
  );
};

export default ButtonCart;
