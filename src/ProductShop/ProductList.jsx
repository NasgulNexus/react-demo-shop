import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "180px"
  }
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          1
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          2
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          3
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          4
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          5
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
