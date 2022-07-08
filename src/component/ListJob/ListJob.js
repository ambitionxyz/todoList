import React, { useState } from "react";

import Job from "../Job/Job";
import Card from "../UI/Card/Card";
import classes from "./ListJob.module.css";

const ListJob = (props) => {
  //const [isEdit, setIsEdit] = useState(false);
  const getDeleteHandler = (id) => {
    props.onRunDelete(id);
  };
  const getEditHandler = (data) => {
    console.log(data);
    props.onRunEdit(data);
  };

  return (
    <Card className={classes.list}>
      <ul className={classes.listItem}>
        {props.listData.map((data, index) => (
          <li key={index}>
            <Job
              data={data}
              onGetDelete={getDeleteHandler}
              onGetEdit={getEditHandler}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default ListJob;
