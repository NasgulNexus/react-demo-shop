import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FavoritesProductTextCard from "./FavoritesProductTextCard";
import { deleteToFavorites } from "../actions/favorites";

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
  FavoritesProductImg: {
    maxWidth: "300px",
    maxHeight: "300px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "10px"
  }
}));

const FavoritesProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.ProductListGridContainer}>
        {favorites.map(favoritesData =>
          products.map(product =>
            favoritesData === product.id ? (
              <Grid key={product.id} item>
                <Card sx={{ maxWidth: 345 }}>
                  <img
                    alt={product.title}
                    src={product.image}
                    className={classes.FavoritesProductImg}
                  />
                  <CardContent>
                    <FavoritesProductTextCard product={product} />
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => dispatch(deleteToFavorites(product.id))}
                    >
                      Удалить из избранного
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ) : null
          )
        )}
      </Grid>
    </div>
  );
};
export default FavoritesProduct;
