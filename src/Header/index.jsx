import React from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
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
  },
  HeaderTitle: {
    marginTop: "5px"
  }
}));

const Header = ({ title, menu, breadcrumbs }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.HeaderAppBar}>
        <Container maxWidth="xl">
          <Grid container spacing={5} className={classes.HeaderGrid}>
            {breadcrumbs === true ? (
              <Grid item>
                <IconButton component={Link} variant="text" to="/">
                  <ArrowBackIosIcon color="primary" />
                </IconButton>
              </Grid>
            ) : null}
            {menu !== undefined
              ? menu.map((element, index) => (
                  <Grid item key={index}>
                    {element}
                  </Grid>
                ))
              : null}
            <Grid item>
              <Typography
                variant="h6"
                component="h2"
                color="primary"
                className={classes.HeaderTitle}
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
