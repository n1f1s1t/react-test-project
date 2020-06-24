import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result/Result';
import Keyboard from './Components/Keyboard/Keyboard';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: "",
    }
  }

  onClick = button => {
    if (button === "CE"){
      this.backspace()
    }
    else if (button === "C"){
      this.delete()
    }
    else if (button ==="="){
      this.calculate()
    }
    else { 
      this.setState({
        result: this.state.result + button})
    }
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

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
    }

    else {
        checkResult = this.state.result
    }

    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(checkResult) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
  };

  render() {
    return (
    <div className="calculator"> 
      <div className="post-rez"><Result result={this.state.result} /></div>
      <div className="post-calc"><Keyboard onClick={this.onClick} /></div>
    </div>
    )
  }
}

export default App;
