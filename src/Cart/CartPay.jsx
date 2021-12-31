import React from "react";
import { makeStyles } from "@mui/styles";
import TotalCost from "../TotalCost";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed"
  }
}));

const CartPay = ({ cart, products }) => {
  const classes = useStyles();
  let totalCost = 0;
  let totalGoods = 0;
  cart.forEach(dataCart => {
    totalCost += products[dataCart.id].price * dataCart.count;
    totalGoods += dataCart.count;
  });
  let differentGoods = cart.length;

  return (
    <div className={classes.root}>
      <Typography>Различных товаров: {differentGoods}</Typography>
      <Typography>Всего товаров: {totalGoods}</Typography>
      <TotalCost totalCost={totalCost} />
      <Button>Оплатить</Button>
    </div>
  );
};
export default CartPay;
