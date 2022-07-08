import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  // const [userEditInput, setUserEditInput] = useState("");
  console.log(props);
  const ChangeHandler = (event) => {
    //  setUserEditInput(event.target.value);
    // console.log(userEditInput);
    props.onGetEditInput({
      content: event.target.value,
      id: props.id,
    });
  };
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={ChangeHandler} />
    </div>
  );
};

{
  /* <div className="new-expense__control">
<label>Date</label>
<input
  type="date"
  value={enteredDate}
  min="2022-06-01"
  max="2025-12-30"
  onChange={dateChangeHandler}
/>
</div> */
}

export default Input;
