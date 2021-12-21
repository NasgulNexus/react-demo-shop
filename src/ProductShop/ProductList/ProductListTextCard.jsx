import React from "react";
import Typography from "@mui/material/Typography";

const ProductListTextCard = ({ product }) => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description
          .split("")
          .slice(0, 100)
          .join("") + "..."}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Цена: {product.price} $
      </Typography>
    </div>
  );
};
export default ProductListTextCard;
