import React from "react";
import { useSelector } from "react-redux";
import CartProductContent from "./CartProductContent";
import { makeStyles } from "@mui/styles";
import CartPay from "./CartPay";
import { Grid } from "@mui/material";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "60px"
  },
  itemCartProduct: {
    marginTop: "30px",
    marginBottom: "30px"
  }
}));

const CartProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  return (
    <>
      <Grid container spacing={2} columns={16} className={classes.root}>
        <Grid item xs={12}>
          {cart.map(cartData => (
            <div key={cartData.id} className={classes.itemCartProduct}>
              <CartProductContent
                product={products[cartData.id]}
                count={cartData.count}
              />
            </div>
          ))}
        </Grid>
        <Grid item xs={4} className={classes.itemCartProduct}>
          <CartPay cart={cart} products={products} />
        </Grid>
      </Grid>
    </>
  );
};
export default CartProduct;
