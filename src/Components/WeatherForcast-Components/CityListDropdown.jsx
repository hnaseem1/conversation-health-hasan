import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { cityList } from "../../Helpers/GlobalHelpers";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  })
);

export default function CityListDropDown(props) {
  const setId = props.setId
  const classes = useStyles();
  const [city, setCity] = React.useState(cityList[0].name);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
    setId(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
          onChange={handleChange}
        >
          <MenuItem value={1}>
            <em>None</em>
          </MenuItem>
          {cityList.map((city) => (
            <MenuItem value={city.id}>{city.name}, {city.country}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
