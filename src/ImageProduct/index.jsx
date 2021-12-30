import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  ImageProduct: {
    maxWidth: "300px",
    maxHeight: "300px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px"
  }
}));

const ImageProduct = ({ title, image }) => {
  const classes = useStyles();
  return <img src={image} alt={title} className={classes.ImageProduct} />;
};

export default ImageProduct;
