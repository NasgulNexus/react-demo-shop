import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import PaymentForm from "./PaymentForm";
import GeneralPurchaseInformation from "../GeneralPurchaseInformation";
import TextProductCost from "../TextProduct/TextProductCost";
import { Typography, Button, Grid } from "@mui/material";
import Line from "../Line";

const useStyles = makeStyles(theme => ({
  PaymentContentDiv: {
    marginTop: "60px"
  },
  PaymentContentButton: {
    marginTop: "15px"
  }
}));

const PaymentContent = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  let totalCost = 0;
  let totalGoods = 0;
  cart.forEach(dataCart => {
    totalCost += products[dataCart.id].price * dataCart.count;
    totalGoods += dataCart.count;
  });
  let differentGoods = cart.length;
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={classes.PaymentContentDiv}>
        <GeneralPurchaseInformation
          totalCost={totalCost}
          totalGoods={totalGoods}
          differentGoods={differentGoods}
        />
        <Button
          onClick={handleClick}
          className={classes.PaymentContentButton}
          size="large"
        >
          {show ? "Посмотреть список товара" : "Закрыть список товаров"}
        </Button>
      </div>
      <Line />
      <PaymentForm />
      <Line />
      <Grid container spacing={6}>
        {!show
          ? cart.map(dataCart => (
              <Grid item>
                <TextProductCost
                  title={products[dataCart.id].title}
                  price={products[dataCart.id].price}
                  count={dataCart.count}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Количество товара: {dataCart.count}
                </Typography>
                <Line />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default PaymentContent;
