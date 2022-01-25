import React from "react";
import Typography from "@mui/material/Typography";

const GeneralPurchaseInformation = ({
  totalCost,
  totalGoods,
  differentGoods
}) => {
  return (
    <>
      <Typography variant="h6" component="p">
        Различных товаров: {differentGoods}
      </Typography>
      <Typography variant="h6" component="p">
        Всего товаров: {totalGoods}
      </Typography>
      <Typography variant="h6" component="p">
        Итоговая стоимость: {totalCost.toFixed(2)}&nbsp;$
      </Typography>
    </>
  );
};
export default GeneralPurchaseInformation;
