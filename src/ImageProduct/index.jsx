import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  ImageProduct: {
    width: "200px",
    height: "200px",
    margin: "auto",
    display: "block",
    objectFit: "contain"
  }
}));

const ImageProduct = ({ title, image }) => {
  const classes = useStyles();
  return (
    <div>
      <img src={image} alt={title} className={classes.ImageProduct} />
    </div>
  );
};

export default ImageProduct;
