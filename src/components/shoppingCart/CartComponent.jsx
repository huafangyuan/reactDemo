import React, { Component } from 'react';
import CartListComponent from './CartListComponent';
import './shoppingCart.less';

export default class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 1,
        proName: '产品1',
        price: 300,
        count: 2,
      }, {
        id: 2,
        proName: '产品2',
        price: 500,
        count: 1,
      }, {
        id: 3,
        proName: '产品3',
        price: 100,
        count: 1,
      }, {
        id: 4,
        proName: '产品4',
        price: 100,
        count: 1,
      }, {
        id: 5,
        proName: '产品5',
        price: 200,
        count: 1,
      }],
      sumPrice: 0,
    };
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  componentWillMount() {
    const sum = this.state.items.reduce((prev, next) => prev + next.count * next.price, 0);
    this.setState({
      sumPrice: sum,
    });
  }

  handleCountChange(id, count) {
    const newItems = this.state.items.map(i => {
      if (i.id === Number(id)) {
        return { ...i, count };
      }
      return i;
    });
    const sum = newItems.reduce((prev, next) => prev + next.count * next.price, 0);
    this.setState({
      items: newItems,
      sumPrice: sum,
    });
  }

  render() {
    return (
      <div>
        <h3>购物车</h3>
        <div className="shoppingCart">
          <div className="items">
            <CartListComponent {...this.state} handleCountChange={this.handleCountChange} />
          </div>
          <div className="sumPrice">
            <span>总价：{this.state.sumPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}
