import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein, desc) {
  return { name, calories, fat, carbs, protein, desc };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "High"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "Low"),
  createData("Eclair", 262, 16.0, 24, 6.0, "High"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "High"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "Medium")
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Min Temp</TableCell>
            <TableCell align="right">Max Temp</TableCell>
            <TableCell align="right">Wind</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
