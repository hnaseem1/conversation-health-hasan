import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export default function ForcastButton(props) {
  const classes = useStyles();
  const text = props.text;
  const setToggle = props.setToggle;
  const toggle = props.toggle;
  const handleFalse = () => {
    setToggle(false);
  };
  const handleTrue = () => {
    setToggle(true);
  };
  const handleOnClick = () => {
    toggle ? handleFalse() : handleTrue();
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={handleOnClick}>
        {text}
      </Button>
    </div>
  );
}
