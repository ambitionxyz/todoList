import React, { useState } from "react";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./Job.module.css";

const Job = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const [isDelete, setIsDelete] = useState();

  const deleteHandler = () => {
    // console.log(props.data.id);
    setIsDelete(props.data.id);
    props.onGetDelete(props.data.id);
  };

  const editHandler = () => {
    // setIsEdit(props.data);
    setIsEdit((prevS) => !prevS);
    if (isEdit) {
      props.onGetEdit(dataEdit);
    }
  };

  // const ssEditHandler = () => {
  //   if (isEdit) {
  //     props.onGetEdit(dataEdit);
  //   }

  // }

  const getEditInput = (dtEdit) => {
    console.log(dtEdit);
    setDataEdit(dtEdit);
    //console.log(dataEdit);
    //
  };

  return (
    <React.Fragment>
      {!isEdit && <p className={classes.job}>{props.data.content}</p>}
      {isEdit && (
        <Input
          key={props.data.id}
          id={props.data.id}
          label=""
          value={props.data.content}
          input={{
            type: "text",
          }}
          onGetEditInput={getEditInput}
        />
      )}
      <div className={classes.feature}>
        {!isEdit && <Button onClick={deleteHandler}>Xoa</Button>}
        <Button onClick={editHandler}>Sua</Button>
      </div>
    </React.Fragment>
  );
};

export default Job;
