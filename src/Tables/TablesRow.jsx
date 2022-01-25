import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TablesRow = ({ title, price, rating, category }) => {
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell align="right">{price}</TableCell>
        <TableCell align="right">{rating}</TableCell>
        <TableCell align="right">{category}</TableCell>
      </TableRow>
    </>
  );
};

export default TablesRow;
