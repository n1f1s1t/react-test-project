import React, { Component } from 'react';
import classes from './Result.module.css';

class Result extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className={classes.result}>
                <p>{result}</p>
            </div>
    );
    }
}

export default Result;