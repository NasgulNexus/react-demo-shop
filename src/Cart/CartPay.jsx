import React from "react";
import { makeStyles } from "@mui/styles";
import GeneralPurchaseInformation from "../GeneralPurchaseInformation";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
      <GeneralPurchaseInformation
        totalCost={totalCost}
        totalGoods={totalGoods}
        differentGoods={differentGoods}
      />
      <Button disabled={totalGoods < 1} component={Link} to="/payment">
        Оплатить
      </Button>
    </div>
  );
};
export default CartPay;
