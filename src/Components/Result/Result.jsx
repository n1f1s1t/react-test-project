import React from 'react';
import classes from './Result.module.css'

const Result = (props) => {
    return (
        <div className={classes.result}><p>{props.result}</p></div>
    )
};

export default Result;