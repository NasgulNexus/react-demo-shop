import React from "react";
import Typography from "@mui/material/Typography";

const TotalCost = ({ totalCost }) => {
  return <Typography> Итоговая стоимость: {totalCost.toFixed(2)} $</Typography>;
};
export default TotalCost;
