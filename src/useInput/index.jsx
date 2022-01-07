import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [fieldProcessed, setFieldProcessed] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setFieldProcessed(true);
  };

  return {
    value,
    onChange,
    onBlur,
    fieldProcessed,
    ...valid
  };
};

export default useInput;
