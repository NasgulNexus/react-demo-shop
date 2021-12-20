import React, { useEffect } from "react";
import clsx from "clsx";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProducts } from "../actions/products";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "180px"
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
    if (!products.list) {
      dispatch(fetchGetProducts());
    }
  }, [products.list, fetchGetProducts]);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        className={clsx(classes.ProductListGridContainer)}
      >
        {products.map(product => (
          <Grid key={product.id} item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={product.title}
                src={product.image}
                height="100"
                sx={{ maxWidth: "100%", height: "10%" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Цена: {product.price} $
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">В корзину</Button>
                <Button size="small">В избранное</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductList;
