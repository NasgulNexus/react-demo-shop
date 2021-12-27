import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CartProductTextCard from "./CartProductTextCard";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonCart from "../ButtonCart";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "60px"
  },
  ProductListGridContainer: {
    justifyContent: "center"
  },
  ProductListHeart: {
    color: "red",
    position: "relative",
    float: "right",
    cursor: "pointer"
  },
  CardProductImg: {
    maxWidth: "100px",
    maxHeight: "100px"
  }
}));

const CartProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  return (
    <>
      {products.map(product =>
        cart.map((cartData, indexData) =>
          cartData.id === product.id ? (
            <div className={classes.root} key={product.id}>
              <Container>
                <Box>
                  <img
                    alt={product.title}
                    src={product.image}
                    className={classes.CardProductImg}
                  />
                  <CartProductTextCard product={product} />
                  <CardActions>
                    <ButtonCart
                      productId={product.id}
                      index={indexData}
                      count={cartData.count}
                    />
                    <Typography>
                      Сумма: {(cartData.count * product.price).toFixed(2)} $
                    </Typography>
                  </CardActions>
                </Box>
              </Container>
            </div>
          ) : null
        )
      )}
    </>
  );
};
export default CartProduct;
