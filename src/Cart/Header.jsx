import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
                Корзина
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="primary">
                Количество выбраного товара: 10
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="primary">
                Общая стоимость: 1212р.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="text" color="primary">
                Оплатить
              </Button>
            </Grid>
            <Grid item>
              <IconButton component={Link} variant="text" to="/">
                <ArrowBackIosIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
