import React from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Header.module.css";

const Header = ({ addItem, dataSource }) => {
  const [newJob, setNewJob] = React.useState("");

  const onChange = (e) => {
    setNewJob(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newId = Math.random.toString();
    let newIdIsValid = false;
    do {
      newIdIsValid = dataSource.includes((item) => {
        return item.id !== newId;
      });
      newId = Math.random.toString();
    } while (newIdIsValid);

    addItem({ id: newId, content: newJob });
    setNewJob("");
  };
  return (
    <Card className={classes.header}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newJob">To do</label>
          <input
            className={classes.input}
            type="text"
            value={newJob}
            onChange={onChange}
          />
          <Button type="submit">Add +</Button>
        </div>
      </form>
    </Card>
  );
};

export default Header;
