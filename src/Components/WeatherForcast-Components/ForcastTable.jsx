import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DateButtons from "./DateButtons"
import { convertKelvinToCelcius, windConverter, tConvert } from "../../Helpers/GlobalHelpers"

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

// parses variables into js object
function createData(date, temp, minTemp, maxTemp, wind, desc) {
  return { date, temp, minTemp, maxTemp, wind, desc };
}

// Generate table rows using filtered data
const generateRowsForCityWithId = (data, date, filterHelper, rowCreator) => {
  const filtered = filterHelper(date, data)
  const rows = filtered?.map((row) => {
    return rowCreator(row.dt_txt.split(" ")[1], row.main.temp, row.main.temp_min, row.main.temp_max, row.wind.speed, row.weather[0].description)
  })
  return rows
}

// filterByDate - Filter Data based on the date string provided
const filterByDate = (date, data) => data?.list?.filter((w) => w?.dt_txt.includes(date))

// findAllDates - Returns all dates in the data
const dates = (data) => data?.list?.map((w) => w?.dt_txt)

const uniqueDates = (datesArray) => {
  const returnObj = {}
  datesArray?.forEach((e) => {
    const key = e.split(" ")[0]
    if (returnObj[key]) {
      returnObj[key] = 0
    } else {
      returnObj[key] = returnObj[key] + 1
    }
  })
  return Object.keys(returnObj)
}

export default function ForecastTable(props) {
  const classes = useStyles();
  const data = props.data
  const[rows, setRows] = React.useState()
  const [date, setDate] = React.useState(uniqueDates(dates(data))[0])
  const[datesArr, setDates] = React.useState([])

  React.useEffect(() => {
      setDates(uniqueDates(dates(data)))
      setRows(generateRowsForCityWithId(data, date, filterByDate, createData))
  }, [date])

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
              <TableCell>Date: {date}</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Min Temp</TableCell>
            <TableCell align="right">Max Temp</TableCell>
            <TableCell align="right">Wind</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
          {data ? 
            <TableBody>
              {rows?.map((row) => (
                <TableRow key={row?.name}>
                  <TableCell component="th" scope="row">
                    {tConvert(row?.date)}
                  </TableCell>
                  <TableCell align="right">{convertKelvinToCelcius(row?.temp)}</TableCell>
                  <TableCell align="right">{convertKelvinToCelcius(row?.minTemp)}</TableCell>
                  <TableCell align="right">{convertKelvinToCelcius((row?.maxTemp))}</TableCell>
                  <TableCell align="right">{windConverter(row?.wind)}</TableCell>
                  <TableCell align="right">{row?.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          : <CircularProgress />}
      </Table>
    </TableContainer>
      {(data) ? <DateButtons dates={datesArr} setDate={setDate} /> : <CircularProgress />}
    </div>
  );
}
