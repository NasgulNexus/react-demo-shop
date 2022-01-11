import React from "react";
import Header from "../Header";
import PaymentContent from "./PaymentContent";

const Payment = () => {
  return (
    <>
      <Header title={"Оплата"} breadcrumbs={true} />
      <PaymentContent />
    </>
  );
};

export default Payment;
