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

const TextProduct = ({
  title,
  description,
  descriptionFull,
  price,
  category,
  rate,
  count
}) => {
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
      {descriptionFull && (
        <Typography sx={{ mt: 2 }}>Описание: {descriptionFull}</Typography>
      )}
      {category && (
        <Typography sx={{ mt: 2 }}>Категория: {category}</Typography>
      )}
      {rate && <Typography sx={{ mt: 2 }}>Рейтинг: {rate}/5</Typography>}
      <Typography variant="h6" sx={{ mt: 2 }} component="div">
        Цена: {price} $
      </Typography>
      {count && (
        <Typography variant="h6" sx={{ mt: 2 }} component="div">
          Количество товара: {count}
        </Typography>
      )}
    </div>
  );
};
export default TextProduct;
