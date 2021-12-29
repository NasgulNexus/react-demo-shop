import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonCart from "../ButtonCart";
import ImageProduct from "../ImageProduct";
import TextProductFull from "../TextProduct/TextProductFull";

const CartProductContent = ({ product, count, index }) => {
  return (
    <>
      <Container>
        <ImageProduct image={product.image} title={product.title} />
        <TextProductFull product={product} />
        <ButtonCart productId={product.id} index={index} count={count} />
        <Typography>Сумма: {(count * product.price).toFixed(2)} $</Typography>
      </Container>
    </>
  );
};
export default CartProductContent;
