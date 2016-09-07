import React, { Component } from 'react';
import CartListComponent from './CartListComponent';
import './shoppingCart.less';

export default class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 1,
        proName: '设计模式',
        price: 44,
        count: 2,
        url: 'http://img3.doubanio.com/mpic/s28065006.jpg',
      }, {
        id: 2,
        proName: '大数据时代',
        price: 30,
        count: 1,
        url: 'http://img7.doubanio.com/mpic/s24515818.jpg',
      }, {
        id: 3,
        proName: '深入浅出node.js',
        price: 48.6,
        count: 1,
        url: 'http://img7.doubanio.com/mpic/s27269296.jpg',
      }, {
        id: 4,
        proName: 'ECMAScript6入门',
        price: 21.9,
        count: 1,
        url: 'http://img7.doubanio.com/mpic/s28315395.jpg',
      }, {
        id: 5,
        proName: 'Facebook效应',
        price: 46.01,
        count: 1,
        url: 'http://img7.doubanio.com/mpic/s4528546.jpg',
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
