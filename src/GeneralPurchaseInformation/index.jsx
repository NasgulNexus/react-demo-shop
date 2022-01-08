import React from "react";
import Typography from "@mui/material/Typography";

const GeneralPurchaseInformation = ({
  totalCost,
  totalGoods,
  differentGoods
}) => {
  return (
    <>
      <Typography>Различных товаров: {differentGoods}</Typography>
      <Typography>Всего товаров: {totalGoods}</Typography>
      <Typography> Итоговая стоимость: {totalCost.toFixed(2)} $</Typography>
    </>
  );
};
export default GeneralPurchaseInformation;
