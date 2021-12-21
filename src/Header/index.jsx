import React from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HeaderLink from "./HeaderLink";
import HeaderReturn from "./HeaderReturn";

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

const Header = ({ header }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.HeaderAppBar}>
        <Container maxWidth="xl">
          <Grid container spacing={5} className={classes.HeaderGrid}>
            <Grid item>
              <Typography variant="h6" color="primary">
                {header.title}
              </Typography>
            </Grid>
            {header.link.map(link => (
              <Grid item key={link.id}>
                <HeaderLink link={link} />
              </Grid>
            ))}

            <HeaderReturn header={header} />
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
