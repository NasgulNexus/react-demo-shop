import React from "react";
import Typography from "@mui/material/Typography";

const GeneralPurchaseInformation = ({
  totalCost,
  totalGoods,
  differentGoods
}) => {
  return (
    <>
      <Typography variant="h6">Различных товаров: {differentGoods}</Typography>
      <Typography variant="h6">Всего товаров: {totalGoods}</Typography>
      <Typography variant="h6">
        Итоговая стоимость: {totalCost.toFixed(2)} $
      </Typography>
    </>
  );
};
export default GeneralPurchaseInformation;
