import { useState, useEffect } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(false);
  const [isName, setName] = useState(false);
  const [isSurname, setSurname] = useState(false);
  const [isDOB, setDOB] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isTelephone, setTelephone] = useState(false);
  const [inputValid, setValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const errorEmptyMessage = "Поле не может быть пустым";

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isName":
          const reName = /^[а-яё]*$/i;
          if (reName.test(value)) {
            setName(false);
            setErrorMessage("");
          } else {
            setName(true);
            setErrorMessage(
              "Некорректно введено имя. Имя вводится русскими буквами"
            );
          }
          break;
        case "isSurname":
          const reSurname = /^[а-яё]*$/i;
          if (reSurname.test(value)) {
            setSurname(false);
            setErrorMessage("");
          } else {
            setSurname(true);
            setErrorMessage(
              "Некорректно введено фамилия. Фамилия вводится русскими буквами"
            );
          }
          break;
        case "isDOB":
          if (parseInt(value, 10) < 2010) {
            setDOB(false);
            setErrorMessage("");
          } else {
            setDOB(true);
            setErrorMessage("Дата рождения не должна быть позже 2010 года");
          }
          break;
        case "isEmail":
          const reEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
          if (reEmail.test(String(value).toLowerCase())) {
            setEmail(false);
          } else {
            setEmail(true);
            setErrorMessage("Некорректная почта");
          }
          break;
        case "isTelephone":
          const reTelephone = /^((\+7|7|8)+([0-9]){10})$/;
          if (reTelephone.test(value)) {
            setTelephone(false);
          } else {
            setTelephone(true);
            setErrorMessage(
              "Некорректный телефон. Телефон должен состоять только из арабских цифр и быть длинной в 11 символов"
            );
          }
          break;
        case "isEmpty":
          if (!value) {
            setEmpty(true);
          } else {
            setEmpty(false);
          }
          break;
        default:
          console.log("default");
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || isName || isSurname || isDOB || isEmail || isTelephone) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [isEmpty, isName, isSurname, isDOB, isEmail, isTelephone]);

  return {
    isEmpty,
    isName,
    isSurname,
    isDOB,
    isEmail,
    isTelephone,
    inputValid,
    errorMessage,
    errorEmptyMessage
  };
};

export default useValidation;
