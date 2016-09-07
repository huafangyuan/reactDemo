import React, { Component, PropTypes } from 'react';
import CartItemComponent from './CartItemComponent';

export default class CartListComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    handleCountChange: PropTypes.func,
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="itemHeader">
              <div className="itemDetail"><h4>产品</h4></div>
              <div className="itemCount" ><h4>数量</h4></div>
              <div className="itemPrice"><h4>总价</h4></div>
              <div className="itemRemove"></div>
            </div>
          </li>
          {this.props.items.map((p, index) => <li key={index}><CartItemComponent key={index} {...p} handleCountChange={this.props.handleCountChange} /></li>)}
        </ul>
      </div>
    );
  }
}
