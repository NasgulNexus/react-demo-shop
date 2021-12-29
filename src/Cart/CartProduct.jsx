import React from "react";
import { useSelector } from "react-redux";
import CartProductContent from "./CartProductContent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "60px"
  }
}));

const CartProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  return (
    <>
      {cart.map(cartData => (
        <div key={cartData.id} className={classes.root}>
          <CartProductContent
            product={products[cartData.id]}
            count={cartData.count}
          />
        </div>
      ))}
    </>
  );
};
export default CartProduct;
