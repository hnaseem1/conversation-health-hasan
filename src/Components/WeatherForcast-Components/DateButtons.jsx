import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function DateButtons(props) {
    const dates = props.dates
    const setDate = props.setDate
    const classes = useStyles();
    const handleClick = (event) => {
        setDate(event.currentTarget.value);
    };
    
    return (
        <div className={classes.root}>
            {dates?.map((date) => (
                <Button key={date.split('-')[2]} onClick={handleClick} variant="contained" value={date}>{date}</Button>
            ))}
        </div>
    );
}
