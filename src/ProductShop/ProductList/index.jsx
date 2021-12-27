import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProducts } from "../../actions/products";
import Popup from "./Popup";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "60px"
  },
  ProductListGridContainer: {
    justifyContent: "center"
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) {
      dispatch(fetchGetProducts());
    }
  }, [products.length, dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.ProductListGridContainer}>
        {products.map(product => (
          <Grid key={product.id} item>
            <Popup product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductList;
