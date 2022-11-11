import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    hasError: firstNameHasError,
    valueIsValid: firstNameIsValid,
    onChangeHandler: onChangeFirstName,
    onBlurHandler: onBlurFirstName,
    enteredValue: enteredFirstNameValue,
    reset: fnReset,
  } = useInput((value) => value.trim() !== '');
  const {
    hasError: lastNameHasError,
    valueIsValid: lastNameIsValid,
    onChangeHandler: onChangeLastName,
    onBlurHandler: onBlurLastName,
    enteredValue: enteredLastNameValue,
    reset: lnReset,
  } = useInput((value) => value.trim() !== '');
  const {
    hasError: emailHasError,
    valueIsValid: emailIsValid,
    onChangeHandler: onChangeEmail,
    onBlurHandler: onBlurEmail,
    enteredValue: enteredEmailValue,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));
  const submitHandler = (e) => {
    e.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredFirstNameValue, enteredLastNameValue, enteredEmailValue);
    fnReset();
    lnReset();
    emailReset();
  };
  let firstNameIsInvalid = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  let lastNameIsInvalid = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  let EmailIsInvalid = emailHasError ? 'form-control invalid' : 'form-control';
  let formIsValid = lastNameIsValid && firstNameIsValid && emailIsValid;
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameIsInvalid}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={onChangeFirstName}
            onBlur={onBlurFirstName}
            value={enteredFirstNameValue}
          />
          {firstNameHasError && <p className='error-text'>wrong First Name</p>}
        </div>
        <div className={lastNameIsInvalid}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={onChangeLastName}
            onBlur={onBlurLastName}
            value={enteredLastNameValue}
          />
          {lastNameHasError && <p className='error-text'>wrong Last Name</p>}
        </div>
      </div>
      <div className={EmailIsInvalid}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          value={enteredEmailValue}
        />
        {emailHasError && <p className='error-text'>wrong Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
