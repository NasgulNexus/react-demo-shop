import React from "react";
import CartButton from "../CartButton";
import ImageProduct from "../ImageProduct";
import { Grid } from "@mui/material";
import TextProduct from "../TextProduct";
import Line from "../Line";

const CartProduct = ({ product, count }) => {
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
            <CartButton productId={product.id} count={count} />
          </div>
        </Grid>
      </Grid>
      <Line />
    </>
  );
};
export default CartProduct;
