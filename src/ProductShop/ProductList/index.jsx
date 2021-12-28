import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProducts } from "../../actions/products";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import ProductListTextCard from "./ProductListTextCard";
import ImageProduct from "./ImageProduct";

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
            <Card sx={{ maxWidth: 345 }}>
              <ImageProduct image={product.image} title={product.title} />
              <CardContent>
                <ProductListTextCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </CardContent>
              <CardActions>
                <Button size="small">В корзину</Button>
                <Button size="small">В избранное</Button>
                <Popup product={product} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductList;
