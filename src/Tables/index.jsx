import React from "react";
import Header from "../Header";
import TablesProduct from "./TablesProduct";

const Tables = () => {
  return (
    <div>
      <Header title={"Таблица сравнения"} breadcrumbs={true} />
      <TablesProduct />
    </div>
  );
};

export default Tables;
