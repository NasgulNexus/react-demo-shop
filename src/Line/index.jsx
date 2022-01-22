import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  Line: {
    margin: "20px 0",
    marginBottom: "40px",
    borderTop: "1px solid #333"
  }
}));

const Line = () => {
  const classes = useStyles();

  return <hr className={classes.Line} />;
};

export default Line;
