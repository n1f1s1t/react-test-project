import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result/Result';
import Keyboard from './Components/Keyboard/Keyboard';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: "",
      operation: ""
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
      result: this.state.result + button})
    }
  }

  logic = () => {
    
  }
  
  delete = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
    <div> 
      <Result result={this.state.result}/>
      <Keyboard onClick={this.onClick}/>
    </div>
    )
  }
}

export default App;
