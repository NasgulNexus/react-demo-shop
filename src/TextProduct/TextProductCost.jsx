import React from "react";
import Typography from "@mui/material/Typography";

const TextProductCost = ({ title, price, count }) => {
  return (
    <>
      <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Цена: {price} $
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Сумма: {(count * price).toFixed(2)} $
      </Typography>
    </>
  );
};
export default TextProductCost;
