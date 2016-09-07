import React, { Component } from 'react';
import LifeDemo from './LifeDemo';

export default class LifeControlDemo extends Component {
  state = {
    show: true,
    value: 1,
  };
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <div>
        <h3>生命周期</h3>
        <LifeDemo {...this.state} />
        <button
          onClick={() => {
            this.setState({ show: false });
          }}
        >移除子组件</button>
        <button
          onClick={() => {
            this.setState({ value: 2 });
          }}
        >更新子组件</button>
      </div>
      );
  }
}
