import React, { Component, PropTypes } from 'react';

export default class CartItemComponent extends Component {
  static propTypes = {
    proName: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    id: PropTypes.number,
    handleCountChange: PropTypes.func,
  }
  static defaultProps = {
    proName: '默认',
    price: 100,
    count: 1,
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let itemCount = e.target.value;
    const id = e.target.getAttribute('data-id');
    if (itemCount < 0) {
      itemCount = 0;
    }
    this.props.handleCountChange(id, Number(itemCount));
  }

  render() {
    const itemSumPrice = this.props.price * this.props.count;
    return (
      <div className="item">
        <div className="itemDetail">
          <span className="pic"></span>
          <div className="product">
            <h4>{this.props.proName}</h4>
            <p>单价：{this.props.price}</p>
          </div>
        </div>
        <div className="itemCount" ><input type="number" data-id={this.props.id} onChange={this.onChange} value={this.props.count} min="0" /></div>
        <div className="itemPrice"><span>{itemSumPrice}</span></div>
        <div className="itemRemove"><span>Remove</span></div>
      </div>
    );
  }
}
