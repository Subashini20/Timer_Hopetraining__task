import logo from './logo.svg';
import './App.css';
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    count: '',
    countDown: 'false'
  }
}
handlechange= (e) => {
  this.setState({count: e.target.value})
  console.log("count", this.state.count);
}

start = () => {
  this.setState({countDown: true})
 const interval = setInterval(() => {  
    this.setState({count: (this.state.count)-1})
    if (this.state.count <= 1) {
      clearInterval(interval)
      this.setState({countDown: 'false'})
    }
    
  }, 1000);
  
}

render() {
  return (
    <>
    <h1>Timer Value:</h1>
    <input type="number" onChange={(e)=> {this.handlechange(e)}}></input>
    {this.state.countDown === 'false' ? <><button onClick={() => { this.start(); } }>Start</button><br /><br /></> : <button disabled>Start</button>}
    <h2>Countdown: {this.state.count}</h2>

    </>
  )
}

}

export default Counter;
