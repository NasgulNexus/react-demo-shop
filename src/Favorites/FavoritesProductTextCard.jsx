import React from "react";
import Typography from "@mui/material/Typography";

const FavoritesProductTextCard = ({ product }) => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Цена: {product.price} $
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Рейтинг: {product.rating.rate}/5
      </Typography>
    </div>
  );
};
export default FavoritesProductTextCard;
