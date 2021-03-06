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

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  CardStyle: {
    maxWidth: "700px",
    minHeight: "600px",
    padding: "10px",
    position: "relative"
  }
}));

const ProdcutCard = ({ product, ProductTextFull }) => {
  const classes = useStyles();
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const addCartShow = cart.find(el => el.id === product.id);
  return (
    <>
      <Card className={classes.CardStyle}>
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
              ???????????????? ?? ??????????????
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </>
  );
};
export default ProdcutCard;
