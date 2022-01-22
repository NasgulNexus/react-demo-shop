import React from "react";
import Header from "../Header";
import PaymentContent from "./PaymentContent";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Payment = () => {
  return (
    <>
      <Header
        title={"Оплата"}
        menu={[
          <IconButton component={Link} variant="text" to="/cart">
            <ArrowBackIosIcon color="primary" />
          </IconButton>
        ]}
      />
      <PaymentContent />
    </>
  );
};

export default Payment;
