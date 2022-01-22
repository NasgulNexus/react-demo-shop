import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteFromCart, addToCart, decrementCart } from "../actions/cart";
import { Grid } from "@mui/material";

const CartButton = ({ productId, count }) => {
  const dispatch = useDispatch();
  return (
    <Grid container>
      <Button
        onClick={event => {
          dispatch(deleteFromCart(productId));
          event.stopPropagation();
        }}
      >
        Удалить товар
      </Button>
      <Button
        onClick={event => {
          dispatch(addToCart(productId));
          event.stopPropagation();
        }}
      >
        +
      </Button>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 0.4, marginLeft: 1, marginRight: 1 }}
      >
        {count}
      </Typography>
      <Button
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

export default CartButton;
