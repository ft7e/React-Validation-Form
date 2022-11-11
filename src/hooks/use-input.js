import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };
  return {
    enteredValue,
    onChangeHandler,
    onBlurHandler,
    reset,
    valueIsValid,
    hasError,
  };
};

export default useInput;
