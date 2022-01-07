import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useInput from "../useInput";

const useStyles = makeStyles(theme => ({
  PaymentForm: {
    display: "flex",
    marginTop: "60px",
    flexDirection: "column",
    alignItems: "center"
  },
  PaymentTextError: {
    color: "red",
    marginTop: "20px"
  },
  PaymentInput: {
    marginTop: "20px"
  },
  PaymentButton: {
    marginTop: "20px"
  }
}));

const Payment = () => {
  const classes = useStyles();

  const configPaymentForm = useInput(
    (name: { value: "", validations: { isEmpty: true, isName: true } }),
    (surname: { value: "", validations: { isEmpty: true, isName: true } })
  );

  const name = useInput("", { isEmpty: true, isName: true });
  const surname = useInput("", { isEmpty: true, isSurname: true });
  const email = useInput("", { isEmail: true });
  const telephone = useInput("", { isTelephone: true });

  return (
    <form className={classes.PaymentForm}>
      {name.fieldProcessed && name.isName && (
        <Typography className={classes.PaymentTextError}>
          {name.errorMessage}
        </Typography>
      )}
      {name.fieldProcessed && name.isEmpty && (
        <Typography className={classes.PaymentTextError}>
          {name.errorEmptyMessage}
        </Typography>
      )}
      <TextField
        value={name.value}
        name="name"
        placeholder="Имя"
        className={classes.PaymentInput}
        onChange={e => name.onChange(e)}
        onBlur={e => name.onBlur(e)}
      />
      {surname.fieldProcessed && surname.isSurname && (
        <Typography className={classes.PaymentTextError}>
          {surname.errorMessage}
        </Typography>
      )}
      {surname.fieldProcessed && surname.isEmpty && (
        <Typography className={classes.PaymentTextError}>
          {surname.errorEmptyMessage}
        </Typography>
      )}
      <TextField
        value={surname.value}
        name="surname"
        placeholder="Фамилия"
        className={classes.PaymentInput}
        onChange={e => surname.onChange(e)}
        onBlur={e => surname.onBlur(e)}
      />
      {email.fieldProcessed && email.isEmail && (
        <Typography className={classes.PaymentTextError}>
          {email.errorMessage}
        </Typography>
      )}
      <TextField
        value={email.value}
        name="email"
        placeholder="Почта"
        className={classes.PaymentInput}
        onChange={e => email.onChange(e)}
        onBlur={e => email.onBlur(e)}
      />
      {telephone.fieldProcessed && telephone.isTelephone && (
        <Typography className={classes.PaymentTextError}>
          {telephone.errorMessage}
        </Typography>
      )}
      <TextField
        value={telephone.value}
        name="telephone"
        placeholder="Телефон"
        className={classes.PaymentInput}
        onChange={e => telephone.onChange(e)}
        onBlur={e => telephone.onBlur(e)}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!name.isFormValid}
        className={classes.PaymentButton}
      >
        Заказать
      </Button>
    </form>
  );
};

export default Payment;
