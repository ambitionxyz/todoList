import React, { useState } from "react";

import Card from "./component/UI/Card/Card";
import Header from "./component/Header/Header";
import ListJob from "./component/ListJob/ListJob";
import classes from "./App.module.css";
const App = (props) => {
  const [listCV, setListCV] = useState([
    { id: Math.random().toString(), content: "cong viec 1" },
    { id: Math.random().toString(), content: "cong viec 2" },
    { id: Math.random().toString(), content: "cong viec 3" },
  ]);

  const getDataInputHandler = (newData) => {
    const data = newData;
    setListCV((prevList) => [data, ...prevList]);
    // console.log(listCV);
  };
  const runDeleteHandler = (id) => {
    console.log(id);
    const newList = listCV.filter((item) => {
      return item.id !== id;
    });

    setListCV(newList);
  };
  const runEditHandler = (data) => {
    //console.log(data);
    const indexE = listCV.findIndex((item) => {
      return item.id === data.id;
    });
    if (indexE !== -1) {
      console.log("da tim thay");
    }
    const newList = listCV;
    newList[indexE].content = data.content;
    setListCV(newList);
  };

  return (
    <Card className={classes.overview}>
      <h1>TO DO LIST</h1>
      <Header onGetDataInput={getDataInputHandler} />
      {/* <ListJob listData={listCV}></ListJob> */}
      <ListJob
        listData={listCV}
        onRunDelete={runDeleteHandler}
        onRunEdit={runEditHandler}
      ></ListJob>
    </Card>
  );
};

export default App;
