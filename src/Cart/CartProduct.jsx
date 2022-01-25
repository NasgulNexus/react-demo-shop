import React from "react";
import CartButton from "../CartButton";
import ImageProduct from "../ImageProduct";
import { Grid } from "@mui/material";
import TextProduct from "../TextProduct";
import Line from "../Line";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  CartProductDivide: {
    marginBottom: "15px"
  }
}));

const CartProduct = ({ product, count }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={5}>
        <Grid item>
          <ImageProduct image={product.image} title={product.title} />
        </Grid>
        <Grid item>
          <div>
            <TextProduct
              title={product.title}
              price={product.price}
              count={count}
            />
            <div className={classes.CartProductDivide} />
            <CartButton productId={product.id} count={count} />
          </div>
        </Grid>
      </Grid>
      <Line />
    </>
  );
};
export default CartProduct;
