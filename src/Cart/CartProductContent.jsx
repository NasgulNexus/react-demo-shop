import React from "react";
import Typography from "@mui/material/Typography";
import ButtonCart from "../ButtonCart";
import ImageProduct from "../ImageProduct";
import TextProductFull from "../TextProduct/TextProductFull";
import { Grid } from "@mui/material";

const CartProductContent = ({ product, count }) => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item>
          <ImageProduct image={product.image} title={product.title} />
        </Grid>
        <Grid item>
          <TextProductFull product={product} />
        </Grid>
        <Grid item>
          <ButtonCart productId={product.id} count={count} />
        </Grid>
        <Grid item>
          <Typography>Сумма: {(count * product.price).toFixed(2)} $</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default CartProductContent;
