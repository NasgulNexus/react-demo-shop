import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { addToCart } from "../actions/cart";
import CartButton from "../CartButton";
import TextProduct from "../TextProduct";
import Card from "@mui/material/Card";
import ImageProduct from "../ImageProduct";
import FavoriteButton from "../FavoriteButton";
import TablesButton from "../TablesButton";

const ProdcutCard = ({ product, ProductTextFull }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const addCartShow = cart.find(el => el.id === product.id);
  return (
    <>
      <Card
        sx={{ maxWidth: 700, minHeight: 600, padding: 3, position: "relative" }}
      >
        <FavoriteButton id={product.id} />
        <ImageProduct image={product.image} title={product.title} />
        <CardContent>
          {ProductTextFull === true ? (
            <TextProduct
              title={product.title}
              descriptionFull={product.description}
              price={product.price}
              category={product.category}
              rate={product.rating.rate}
            />
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
                <CartButton productId={product.id} count={data.count} />
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
