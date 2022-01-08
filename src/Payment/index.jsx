import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Field } from "react-final-form";

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
    marginTop: "20px",
    width: "600px"
  },
  PaymentButton: {
    marginTop: "20px"
  }
}));

const Payment = () => {
  const classes = useStyles();

  const onSubmit = e => {
    const conclusion =
      e.name + " " + e.surname + " " + e.email + " " + e.telephone;
    alert(conclusion);
  };

  const validate = e => {
    const errors = {};

    const reNameAndSurname = /^[а-яё]*$/i;
    const reEmail = /[^@]+@[^@]+/i;
    const reTelephone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    if (!e.name || !reNameAndSurname.test(e.name)) {
      errors.name =
        "Поле заполнено неверно. Необходимо заполнять русскими буквами.";
    }

    if (!e.surname || !reNameAndSurname.test(e.surname)) {
      errors.surname =
        "Поле заполнено неверно. Необходимо заполнять русскими буквами.";
    }

    if (!e.email || !reEmail.test(e.email)) {
      errors.email = "Поле заполнено неверно.";
    }

    if (!e.telephone || !reTelephone.test(e.telephone)) {
      errors.telephone = "Поле заполнено неверно.";
    }

    return errors;
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.PaymentForm}>
          <Field name="name">
            {({ input, meta }) => (
              <div>
                <TextField
                  {...input}
                  placeholder="Имя"
                  className={classes.PaymentInput}
                />
                {meta.touched && meta.error && (
                  <Typography className={classes.PaymentTextError}>
                    {meta.error}
                  </Typography>
                )}
              </div>
            )}
          </Field>
          <Field name="surname">
            {({ input, meta }) => (
              <div>
                <TextField
                  {...input}
                  placeholder="Фамилия"
                  className={classes.PaymentInput}
                />
                {meta.touched && meta.error && (
                  <Typography className={classes.PaymentTextError}>
                    {meta.error}
                  </Typography>
                )}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <TextField
                  {...input}
                  placeholder="Почта"
                  className={classes.PaymentInput}
                />
                {meta.touched && meta.error && (
                  <Typography className={classes.PaymentTextError}>
                    {meta.error}
                  </Typography>
                )}
              </div>
            )}
          </Field>
          <Field name="telephone">
            {({ input, meta }) => (
              <div>
                <TextField
                  {...input}
                  placeholder="Телефон"
                  className={classes.PaymentInput}
                />
                {meta.touched && meta.error && (
                  <Typography className={classes.PaymentTextError}>
                    {meta.error}
                  </Typography>
                )}
              </div>
            )}
          </Field>
          <Button type="submit" className={classes.PaymentButton}>
            Заказать
          </Button>
        </form>
      )}
    />
  );
};

export default Payment;
