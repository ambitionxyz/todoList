import React, { useState } from "react";

import Button from "../UI/Button/Button";
import classes from "./NewJob.module.css";

const NewJob = (props) => {
  const [newJob, setNewJob] = useState("");

  const dateChangeHandler = (e) => {
    setNewJob(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onGetNewData({ id: Math.random().toString(), content: newJob });
    setNewJob("");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="newJob">To do</label>
        <input
          className={classes.input}
          id="newJob"
          type="text"
          value={newJob}
          onChange={dateChangeHandler}
        />
        <Button onClick={submitHandler}>Add +</Button>
      </div>
    </form>
  );
};

export default NewJob;
