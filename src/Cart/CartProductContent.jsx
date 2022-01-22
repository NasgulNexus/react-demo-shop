import React from "react";
import ButtonCart from "../ButtonCart";
import ImageProduct from "../ImageProduct";
import { Grid } from "@mui/material";
import TextProduct from "../TextProduct";
import Line from "../Line";

const CartProductContent = ({ product, count }) => {
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
            <ButtonCart productId={product.id} count={count} />
          </div>
        </Grid>
      </Grid>
      <Line />
    </>
  );
};
export default CartProductContent;
