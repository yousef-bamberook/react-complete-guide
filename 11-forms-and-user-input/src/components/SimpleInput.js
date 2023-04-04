import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  //used to validate the form
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //Setting enteredNameIsValid = true initially will cause an issue which is
  //this hook will trigger when page loaded and assuming the form is valid
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Inputid valid!');
    }
  }, [enteredNameIsValid]);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //basic validation
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    //resetting hte form
    // nameInputRef.current.value = ''; // => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
  };

  const nameInputIsInvalild = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalild
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalild && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
