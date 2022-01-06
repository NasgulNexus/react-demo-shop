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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TablesRow from "./TablesRow";
import useSortTableData from "./useSortTableData";

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
  },
  sortButton: {
    cursor: "pointer"
  }
}));

const TablesProduct = () => {
  const classes = useStyles();
  const products = useSelector(state => state.products);
  const tables = useSelector(state => state.tables);
  const data = tables.map(tableId => {
    return products[tableId];
  });

  const {
    items,
    requestSortAscending,
    requestSortDescending
  } = useSortTableData(data);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("title")}
                  className={classes.sortButton}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("title")}
                  className={classes.sortButton}
                />
                Title
              </TableCell>
              <TableCell align="right">
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("price")}
                  className={classes.sortButton}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("price")}
                  className={classes.sortButton}
                />
                Price ($)
              </TableCell>
              <TableCell align="right">
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("rating.rate")}
                  className={classes.sortButton}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("rating.rate")}
                  className={classes.sortButton}
                />
                Rating (x/5)
              </TableCell>
              <TableCell align="right">
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("category")}
                  className={classes.sortButton}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("category")}
                  className={classes.sortButton}
                />
                Categoty
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(product => (
              <TablesRow
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating.rate}
                category={product.category}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablesProduct;
