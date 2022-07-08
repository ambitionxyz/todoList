import React from "react";

import Card from "../UI/Card/Card";
import NewJob from "../NewJob/NewJob";
import classes from "./Header.module.css";

const Header = (props) => {
  const getNewDataHandler = (newData) => {
    props.onGetDataInput(newData);
  };
  return (
    <Card className={classes.header}>
      <NewJob onGetNewData={getNewDataHandler} />
    </Card>
  );
};

export default Header;
