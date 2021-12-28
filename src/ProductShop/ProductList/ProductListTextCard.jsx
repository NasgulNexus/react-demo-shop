import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  description: {
    lineHeight: "18px",
    maxHeight: "54px",
    overflow: "hidden"
  }
}));

const ProductListTextCard = ({ product }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        className={classes.description}
      >
        {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Цена: {product.price} $
      </Typography>
    </div>
  );
};
export default ProductListTextCard;
