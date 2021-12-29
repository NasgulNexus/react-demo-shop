import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProducts } from "../actions/products";
import Popup from "../Popup";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "60px"
  },
  ProductListGridContainer: {
    justifyContent: "center"
  }
}));

const ProductContent = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const searchResult = useSelector(state => state.searchResult);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(products).length === 0) {
      dispatch(fetchGetProducts());
    }
  }, [products, searchResult, dispatch]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.ProductListGridContainer}>
        {searchResult.map(idProduct => (
          <Grid key={idProduct} item>
            <Popup product={products[idProduct]} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductContent;
