import logo from './logo.svg';
import './App.css';
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      countDown: false
    }
  }

  handleChange = (e) => {
    this.setState({ count: parseInt(e.target.value) })
  }

  start = () => {
    this.setState({ countDown: true }, () => {
      const interval = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count - 1 }), () => {
          if (this.state.count <= 0) {
            clearInterval(interval)
            this.setState({ countDown: false })
          }
        })
      }, 1000)
    })
  }

  render() {
    return (
      <>
        <h1>Timer Value:</h1>
        <input type="number" onChange={this.handleChange}></input>
        {this.state.countDown ? (
          <button disabled>Start</button>
        ) : (
          <button onClick={this.start}>Start</button>
        )}
        <h2>Countdown: {this.state.count}</h2>
      </>
    )
  }
}

export default Timer;
