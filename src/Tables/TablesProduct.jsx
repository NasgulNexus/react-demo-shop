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
import { Typography } from "@mui/material";
import clsx from "clsx";

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
  },
  sortButtonSelect: {
    color: "blue"
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
    requestSortDescending,
    selectButton
  } = useSortTableData(data);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Title</Typography>
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("title")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "titleAscending"
                  })}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("title")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "titleDescending"
                  })}
                />
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Price ($)</Typography>
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("price")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "priceAscending"
                  })}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("price")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "priceDescending"
                  })}
                />
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Rating (x/5)</Typography>
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("rating.rate")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "ratingAscending"
                  })}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("rating.rate")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "ratingDescending"
                  })}
                />
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Categoty</Typography>
                <ArrowUpwardIcon
                  onClick={() => requestSortAscending("category")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "categotyAscending"
                  })}
                />
                <ArrowDownwardIcon
                  onClick={() => requestSortDescending("category")}
                  fontSize="small"
                  className={clsx(classes.sortButton, {
                    [classes.sortButtonSelect]:
                      selectButton === "categotyDescending"
                  })}
                />
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
