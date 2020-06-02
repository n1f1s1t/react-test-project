import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result/Result';
import Keyboard from './Components/Keyboard/Keyboard';

class App extends Component {
  constructor(){
    super();

    this.state = {
      first_value: "",
      second_value: "",
      operation: "",
    }
  }

  onClick = button => {
    if (button === "CE"){
      this.backspace()
    }
    else if (button === "C"){
      this.delete()
    }
    else { 
      this.setState({
        first_value: this.state.first_value + button})
    }
  }

  logic = () => {
    
  }
  
  delete = () => {
    this.setState({
      first_value: ""
    })
  }

  backspace = () => {
    this.setState({
      first_value: this.state.first_value.slice(0, -1)
    })
  }

  render() {
    return (
    <div className="calculator"> 
      <div className="post-rez"><Result result={this.state.first_value} /></div>
      <div className="post-calc"><Keyboard onClick={this.onClick} /></div>
    </div>
    )
  }
}

export default App;
