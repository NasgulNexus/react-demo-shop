import React from "react";
import Header from "../Header";
import TablesContent from "./TablesContent";

const Tables = () => {
  return (
    <div>
      <Header title={"Таблица сравнения"} breadcrumbs={true} />
      <TablesContent />
    </div>
  );
};

export default Tables;
