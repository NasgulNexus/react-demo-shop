import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { addToFavorites, deleteToFavorites } from "../../actions/favorites";
import { addToCart } from "../../actions/cart";
import { addToTables, deleteToTables } from "../../actions/tables";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ButtonCart from "../../ButtonCart";
import ProductListTextCard from "./ProductListTextCard";
import Card from "@mui/material/Card";

const useStyles = makeStyles(theme => ({
  ProductListHeart: {
    color: "red",
    position: "relative",
    float: "right",
    cursor: "pointer"
  },
  ProductListImg: {
    maxWidth: "300px",
    maxHeight: "300px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "10px"
  }
}));

const ProdcutCard = ({ product }) => {
  const classes = useStyles();
  const favorites = useSelector(state => state.favorites);
  const cart = useSelector(state => state.cart);
  const tables = useSelector(state => state.tables);
  const dispatch = useDispatch();
  const IndexCart = cart
    .map(el => {
      return el.id === product.id ? el.id : null;
    })
    .filter(el => el !== null);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        {favorites.indexOf(product.id) > -1 ? (
          <FavoriteIcon
            className={classes.ProductListHeart}
            key={product.id}
            onClick={event =>
              dispatch(deleteToFavorites(product.id), event.stopPropagation())
            }
          />
        ) : (
          <FavoriteBorderIcon
            className={classes.ProductListHeart}
            key={product.id}
            onClick={event =>
              dispatch(addToFavorites(product.id), event.stopPropagation())
            }
          />
        )}
        <img
          alt={product.title}
          src={product.image}
          className={classes.ProductListImg}
        />
        <CardContent>
          <ProductListTextCard product={product} />
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
              onClick={event =>
                dispatch(addToCart(product.id), event.stopPropagation())
              }
            >
              Добавить в корзину
            </Button>
          ) : null}
          {tables.indexOf(product.id) > -1 ? (
            <Button
              size="small"
              onClick={event =>
                dispatch(deleteToTables(product.id), event.stopPropagation())
              }
            >
              Убрать из таблицы сравнения
            </Button>
          ) : (
            <Button
              size="small"
              onClick={event =>
                dispatch(addToTables(product.id), event.stopPropagation())
              }
            >
              Добавить в таблицу сравнения
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};
export default ProdcutCard;
