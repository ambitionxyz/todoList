import React, { useState } from "react";

import Card from "./component/UI/Card/Card";
import Header from "./component/Header/Header";
import ListJob from "./component/ListJob/ListJob";
import classes from "./App.module.css";
const App = (props) => {
  const [listCV, setListCV] = useState([]);

  const addItem = (newData) => {
    const data = newData;
    setListCV((prevList) => [data, ...prevList]);
  };

  const deleteItem = (id) => {
    const newList = listCV.filter((item) => {
      return item.id !== id;
    });
    setListCV(newList);
  };

  const editItem = (data) => {
    const indexE = listCV.findIndex((item) => {
      return item.id === data.id;
    });
    if (indexE !== -1) {
      const newList = listCV;
      newList[indexE].content = data.content;
      setListCV(newList);
    }
  };

  return (
    <Card className={classes.overview}>
      <h1>TO DO LIST</h1>
      <Header addItem={addItem} dataSource={listCV} />
      <ListJob
        dataSource={listCV}
        deleteItem={deleteItem}
        editItem={editItem}
      ></ListJob>
    </Card>
  );
};

export default App;
