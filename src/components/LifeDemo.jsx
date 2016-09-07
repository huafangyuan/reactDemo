import React, { Component, PropTypes } from 'react';
/* eslint no-console:"off" */
export default class LiftDemo extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  }
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    console.log('constructor', this.props);
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.setState({
      show: nextProps.show,
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <span>子组件：LiftDemo</span>
        <p>属性：{this.props.value}</p>
        <div>show: {this.state.show.toString()}</div>
      </div>
      );
  }
}
