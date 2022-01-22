import React from "react";
import Typography from "@mui/material/Typography";

const GeneralPurchaseInformation = ({
  totalCost,
  totalGoods,
  differentGoods
}) => {
  return (
    <>
      <Typography variant="h6" component="div">
        Различных товаров: {differentGoods}
      </Typography>
      <Typography variant="h6" component="div">
        Всего товаров: {totalGoods}
      </Typography>
      <Typography variant="h6" component="div">
        Итоговая стоимость: {totalCost.toFixed(2)}&nbsp;$
      </Typography>
    </>
  );
};
export default GeneralPurchaseInformation;
