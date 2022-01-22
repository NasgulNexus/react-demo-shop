import React from "react";
import Typography from "@mui/material/Typography";

const TextProductFull = ({ product }) => {
  return (
    <>
      <Typography sx={{ mt: 3 }} variant="h6" component="h2">
        {product.title}
      </Typography>
      <Typography sx={{ mt: 3 }}>Описание: {product.description}</Typography>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Цена: {product.price} $
      </Typography>
      <Typography sx={{ mt: 2 }}>Категория: {product.category}</Typography>
      <Typography sx={{ mt: 2, mb: 3 }}>
        Рейтинг: {product.rating.rate}/5
      </Typography>
    </>
  );
};

export default TextProductFull;
