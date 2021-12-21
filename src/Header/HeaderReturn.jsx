import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderReturn = ({ header }) => {
  if (header.return === true) {
    return (
      <Grid item>
        <IconButton component={Link} variant="text" to="/">
          <ArrowBackIosIcon color="primary" />
        </IconButton>
      </Grid>
    );
  } else {
    return (
      <Grid item>
        <IconButton component={Link} variant="text" to="/cart">
          <ShoppingCartIcon color="primary" />
        </IconButton>
      </Grid>
    );
  }
};

export default HeaderReturn;
