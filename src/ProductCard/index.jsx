import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { addToCart } from "../actions/cart";
import ButtonCart from "../ButtonCart";
import TextProduct from "./TextProduct";
import Card from "@mui/material/Card";
import ImageProduct from "../ImageProduct";
import FavoriteButton from "./FavoriteButton";
import TablesButton from "./TablesButton";
import TextProductFull from "../TextProduct/TextProductFull";

const ProdcutCard = ({ product, ProdcutTextFull }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const IndexCart = cart
    .map(el => {
      return el.id === product.id ? el.id : null;
    })
    .filter(el => el !== null);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <FavoriteButton id={product.id} />
        <ImageProduct image={product.image} title={product.title} />
        <CardContent>
          {ProdcutTextFull === true ? (
            <TextProductFull product={product} />
          ) : (
            <TextProduct
              title={product.title}
              description={product.description}
              price={product.price}
            />
          )}
        </CardContent>
        <CardActions>
          {cart.map((data, index) =>
            data.id === product.id ? (
              <div key={product.id}>
                <ButtonCart
                  productId={product.id}
                  index={index}
                  count={data.count}
                />
              </div>
            ) : null
          )}
          {IndexCart.length === 0 ? (
            <Button
              size="small"
              onClick={event => {
                dispatch(addToCart(product.id));
                event.stopPropagation();
              }}
            >
              Добавить в корзину
            </Button>
          ) : null}
          <TablesButton id={product.id} />
        </CardActions>
      </Card>
    </>
  );
};
export default ProdcutCard;
