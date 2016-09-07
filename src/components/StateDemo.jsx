import React, { Component } from 'react';

export default class StateDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 60,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  tick(val) {
    this.setState({ time: val });
  }

  handleClick() {
    let time = this.state.time;
    const timer = setInterval(() => {
      if (--time) {
        this.tick(time);
      } else {
        clearTimeout(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>state演示</h3>
        <span>1分钟倒计时：</span>
        <span style={{ color: 'orange' }}>{this.state.time}</span>
        <button onClick={this.handleClick}>start</button>
      </div>
      );
  }
}
