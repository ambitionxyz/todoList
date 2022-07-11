import React, { useState } from "react";

import Job from "../Job/Job";
import Card from "../UI/Card/Card";
import classes from "./ListJob.module.css";

const ListJob = ({ dataSource, deleteItem, editItem }) => {
  const listEmpty = <p>List empty</p>;
  return (
    <Card className={classes.list}>
      <ul className={classes.listItem}>
        {(!dataSource || dataSource.length === 0) && listEmpty}

        {dataSource &&
          dataSource.length &&
          dataSource.map((data, index) => (
            <li key={index}>
              <Job data={data} onDelete={deleteItem} onEdit={editItem} />
            </li>
          ))}
      </ul>
    </Card>
  );
};
export default ListJob;
