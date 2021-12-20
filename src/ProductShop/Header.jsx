import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  HeaderAppBar: {
    background: "#ffffff"
  },
  HeaderGrid: {
    justifyContent: "center"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.HeaderAppBar)}>
        <Container maxWidth="xl">
          <Grid container spacing={5} className={clsx(classes.HeaderGrid)}>
            <Grid item>
              <Typography variant="h6" color="primary">
                <ShoppingBasketIcon color="primary" mr={2} />
                Магазин на реакте
              </Typography>
            </Grid>
            <Grid item>
              <Button component={Link} variant="text" to="/favorites">
                Избранное
              </Button>
            </Grid>
            <Grid item>
              <Button component={Link} variant="text" to="/tables">
                Таблица сравнения
              </Button>
            </Grid>
            <Grid item>
              <IconButton component={Link} variant="text" to="/cart">
                <ShoppingCartIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
