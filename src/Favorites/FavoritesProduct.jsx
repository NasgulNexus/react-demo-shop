import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import ProdcutCard from "../ProductCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "60px"
  },
  ProductListGridContainer: {
    justifyContent: "center"
  }
}));

const FavoritesProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const favorites = useSelector(state => state.favorites);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.ProductListGridContainer}>
        {favorites.map(favoritesId => (
          <Grid item key={favoritesId}>
            <ProdcutCard
              product={products[favoritesId]}
              ProdcutTextFull={true}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default FavoritesProduct;
