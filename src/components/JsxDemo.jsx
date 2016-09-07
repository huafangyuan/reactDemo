import React, { Component, PropTypes } from 'react';
import Demo1 from './Demo1';

// 组件命名遵循驼峰命名，首字母大写
export default class JsxDemo extends Component {
  static propTypes = {
    name: PropTypes.string,
    year: PropTypes.string,
    month: PropTypes.number,
    day: PropTypes.number,
  }

  render() {
    // 定义样式组件
    const myStyles = {
      color: 'red',
      fontSize: '20px',
    };

    // render 方法 return 回来的根元素只能是一个，超过会报错
    // { } 里面可以写JS代码
    return (
      <div>
        <h3>props传递</h3>
        <div style={myStyles}> hi, {this.props.name || '默认名'}</div>
        <ul>
          <li>{this.props.year}</li>
          <li>{this.props.month}</li>
          <li>{this.props.day}</li>
        </ul>
        <h3>jsx和非jsx</h3>
        {
        // jsx语法实现
          <div className="div1">
            <a href="#">链接</a>
            <Demo1 message="come on !">我是子节点</Demo1>
          </div>
        }
        {
          // js语法实现
          React.createElement('div', {
            className: 'div1',
          }, [
            React.createElement('a', { href: '#' }, '链接'),
            React.createElement(Demo1, { message: 'come on !' }, '我是子节点'),
          ])
      }
      </div>
      );
  }
}
