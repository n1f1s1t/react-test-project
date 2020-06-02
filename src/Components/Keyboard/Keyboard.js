import React, { Component } from 'react';
import classes from './Kayboard.module.css'

class Keyboard extends Component {
    render() {
        return (
            <div className={classes.keyboard}>
                    <button className={classes.zero} name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className={classes.ravno} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button className={classes.C} name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>                    
                    <button className={classes.CE} name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>                    
                    <button className={classes.plus} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>

                    <button className={classes.one} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className={classes.two} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button className={classes.three} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button className={classes.minus} name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>

                    <button className={classes.four} name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className={classes.five} name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className={classes.six} name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button className={classes.multiply} name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>

                    <button className={classes.seven} name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className={classes.eight} name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className={classes.nine} name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button className={classes.divide} name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
            </div>
        )
    }
};

export default Keyboard;