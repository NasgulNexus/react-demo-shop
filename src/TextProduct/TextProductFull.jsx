import React from "react";
import Typography from "@mui/material/Typography";

const TextProductFull = ({ product }) => {
  return (
    <>
      <Typography variant="h6" component="h2">
        {product.title}
      </Typography>
      <Typography sx={{ mt: 2 }}>Описание: {product.description}</Typography>
      <Typography sx={{ mt: 2 }}>Цена: {product.price} $</Typography>
      <Typography sx={{ mt: 2 }}>Категория: {product.category}</Typography>
      <Typography sx={{ mt: 2 }}>Рейтинг: {product.rating.rate}/5</Typography>
    </>
  );
};

export default TextProductFull;
