import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { addToTables, deleteFromTables } from "../actions/tables";

const TablesButton = ({ id }) => {
  const tables = useSelector(state => state.tables);
  const dispatch = useDispatch();

  return (
    <>
      {tables.indexOf(id) > -1 ? (
        <Button
          size="small"
          onClick={event => {
            dispatch(deleteFromTables(id));
            event.stopPropagation();
          }}
        >
          Убрать из таблицы сравнения
        </Button>
      ) : (
        <Button
          size="small"
          onClick={event => {
            dispatch(addToTables(id));
            event.stopPropagation();
          }}
        >
          Добавить в таблицу сравнения
        </Button>
      )}
    </>
  );
};
export default TablesButton;
