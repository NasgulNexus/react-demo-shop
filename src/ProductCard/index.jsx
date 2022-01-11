import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { addToCart } from "../actions/cart";
import ButtonCart from "../ButtonCart";
import TextProduct from "../TextProduct";
import Card from "@mui/material/Card";
import ImageProduct from "../ImageProduct";
import FavoriteButton from "./FavoriteButton";
import TablesButton from "./TablesButton";
import TextProductFull from "../TextProduct/TextProductFull";

const ProdcutCard = ({ product, ProductTextFull }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const addCartShow = cart.find(el => el.id === product.id);
  return (
    <>
      <Card sx={{ maxWidth: 700, minHeight: 570, padding: 3 }}>
        <FavoriteButton id={product.id} />
        <ImageProduct image={product.image} title={product.title} />
        <CardContent>
          {ProductTextFull === true ? (
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
          <TablesButton id={product.id} />
        </CardActions>
        <CardActions>
          {cart.map(data =>
            data.id === product.id ? (
              <div key={product.id}>
                <ButtonCart productId={product.id} count={data.count} />
              </div>
            ) : null
          )}
          {addCartShow === undefined ? (
            <Button
              onClick={event => {
                dispatch(addToCart(product.id));
                event.stopPropagation();
              }}
            >
              Добавить в корзину
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </>
  );
};
export default ProdcutCard;
