import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  description: {
    lineHeight: "18px",
    maxHeight: "54px",
    overflow: "hidden"
  }
}));

const TextProduct = ({ title, description, price }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2 }}
        className={classes.description}
      >
        {description}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Цена: {price} $
      </Typography>
    </div>
  );
};
export default TextProduct;
