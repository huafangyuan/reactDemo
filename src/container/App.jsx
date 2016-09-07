import React, { Component } from 'react';
import Demo1 from '../components/Demo1';
import JsxDemo from '../components/JsxDemo';
import StateDemo from '../components/StateDemo';
import LifeControlDemo from '../components/LifeControlDemo';
import FormDemo from '../components/FormDemo';
import CartComponent from '../components/shoppingCart/CartComponent';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: 0,
    };
  }

  render() {
    const data = {
      year: '2016',
      month: 9,
      day: 6,
    };

    return (
      <div>
        <ul className="app">
          <li><span onClick={() => this.setState({ demo: 0 })}>props传递</span></li>
          <li><span onClick={() => this.setState({ demo: 1 })}>jsx和非jsx</span></li>
          <li><span onClick={() => this.setState({ demo: 2 })}>state演示</span></li>
          <li><span onClick={() => this.setState({ demo: 3 })}>生命周期</span></li>
          <li><span onClick={() => this.setState({ demo: 4 })}>表单示例</span></li>
          <li><span onClick={() => this.setState({ demo: 5 })}>购物车</span></li>
        </ul>
        {this.state.demo === 0 && <Demo1 message="hello" />}
        {this.state.demo === 1 && <JsxDemo name="chenyao" {...data} />}
        {this.state.demo === 2 && <StateDemo />}
        {this.state.demo === 3 && <LifeControlDemo />}
        {this.state.demo === 4 && <FormDemo />}
        {this.state.demo === 5 && <CartComponent />}
      </div>
    );
  }
}

export default App;
