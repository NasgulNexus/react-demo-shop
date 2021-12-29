import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "60px"
  },
  ProductListGridContainer: {
    justifyContent: "center"
  },
  ProductListHeart: {
    color: "red",
    position: "relative",
    float: "right",
    cursor: "pointer"
  },
  CardProductImg: {
    maxWidth: "100px",
    maxHeight: "100px"
  }
}));

const TablesProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const tables = useSelector(state => state.tables);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Price ($)</TableCell>
              <TableCell align="right">Rating (x/5)</TableCell>
              <TableCell align="right">Categoty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map(tableId => (
              <TableRow
                key={products[tableId].id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {products[tableId].title}
                </TableCell>
                <TableCell align="right">{products[tableId].price}</TableCell>
                <TableCell align="right">
                  {products[tableId].rating.rate}
                </TableCell>
                <TableCell align="right">
                  {products[tableId].category}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablesProduct;
