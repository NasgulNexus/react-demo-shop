import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";

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
      <AppBar position="fixed" className={classes.HeaderAppBar}>
        <Container maxWidth="xl">
          <Grid container spacing={5} className={classes.HeaderGrid}>
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
