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

  const name = useInput("", { isEmpty: true, isName: true });
  const surname = useInput("", { isEmpty: true, isSurname: true });
  const DOB = useInput("", { isDOB: true });
  const email = useInput("", { isEmail: true });
  const telephone = useInput("", { isTelephone: true });

  const disabledButton =
    name.inputValid &&
    surname.inputValid &&
    DOB.inputValid &&
    email.inputValid &&
    telephone.inputValid;

  return (
    <form className={classes.PaymentForm}>
      {name.isDirty && name.isName && (
        <Typography className={classes.PaymentTextError}>
          {name.errorMessage}
        </Typography>
      )}
      {name.isDirty && name.isEmpty && (
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
      {surname.isDirty && surname.isSurname && (
        <Typography className={classes.PaymentTextError}>
          {surname.errorMessage}
        </Typography>
      )}
      {surname.isDirty && surname.isEmpty && (
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
      {DOB.isDirty && DOB.isDOB && (
        <Typography className={classes.PaymentTextError}>
          {DOB.errorMessage}
        </Typography>
      )}
      <TextField
        value={DOB.value}
        type="date"
        name="DOB"
        placeholder="Дата рождения"
        className={classes.PaymentInput}
        onChange={e => DOB.onChange(e)}
        onBlur={e => DOB.onBlur(e)}
      />
      {email.isDirty && email.isEmail && (
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
      {telephone.isDirty && telephone.isTelephone && (
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
        disabled={!disabledButton}
        className={classes.PaymentButton}
      >
        Заказать
      </Button>
    </form>
  );
};

export default Payment;
