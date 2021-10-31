import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);
  const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsNotValid = !enteredNameIsValid && nameInputIsTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsNotValid = !enteredEmailIsValid && emailInputIsTouched;

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value)
  }
  const emailChangedHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setNameInputIsTouched(true)
  }
  const emailInputBlurHandler = (event) => {
    setEmailInputIsTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameInputIsTouched(true);
    setEmailInputIsTouched(true);

    if (!(enteredNameIsValid && enteredEmailIsValid)) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setNameInputIsTouched(false);
    setEmailInputIsTouched(false);
  }

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input type="text" id="name" placeholder=" Name" value={enteredName} onChange={nameChangedHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsNotValid && <p className={classes.invalid}>Name can't be blank</p>}
        <input type="text" id="email" placeholder=" Email" value={enteredEmail} onChange={emailChangedHandler} onBlur={emailInputBlurHandler}/>
        {emailInputIsNotValid && <p className={classes.invalid}>Enter a valid email</p>}
        <input type="submit" value="SUBMIT" className={classes['submit-button']}/>
      </form>
    </React.Fragment>
  )
};

export default Form;