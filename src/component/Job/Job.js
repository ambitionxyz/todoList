import React, { useState } from "react";

import Button from "../UI/Button/Button";
import classes from "./Job.module.css";

const Job = (props) => {
  const [dataEdit, setDataEdit] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.data.id);
  };

  const editHandler = () => {
    // setIsEdit(props.data);
    setIsEdit((prevS) => !prevS);
    if (isEdit) {
      // console.log(dataEdit);
      props.onEdit(dataEdit);
    }
  };

  const onChange = (event) => {
    setDataEdit({
      id: props.data.id,
      content: event.target.value,
    });
  };

  return (
    <React.Fragment>
      {!isEdit && <p className={classes.job}>{props.data.content}</p>}

      {isEdit && <input className={classes.input} onChange={onChange} />}

      <div className={classes.feature}>
        {!isEdit && <Button onClick={deleteHandler}>Xoa</Button>}
        <Button onClick={editHandler}>Sua</Button>
      </div>
    </React.Fragment>
  );
};

export default Job;
