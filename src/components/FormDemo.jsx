import React, { Component } from 'react';

export default class FormDemo extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputValue: '请输入...',
      selectValue: 'A',
      radioValue: 'male',
      checkValues: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleRadioClick(e) {
    this.setState({
      radioValue: e.target.value,
    });
  }

  handleCheckboxClick(e) {
    const checked = e.target.checked;
    const value = e.target.value;
    const checkValues = this.state.checkValues;
    const idx = checkValues.indexOf(value);
    if (checked && idx === -1) {
      this.setState(() => checkValues.push(value));
    } else if (!checked && idx !== -1) {
      this.setState(() => checkValues.splice(idx, 1));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('表单提交', this.state);
  }
  render() {
    return (
      <div>
        <h3>表单示例</h3>
        <form onSubmit={this.handleSubmit} style={{ lineHeight: '30px' }}>
          <label>姓名</label>
          <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} /><br />
          <label>选择性别</label><br />
          <input onChange={this.handleRadioClick} type="radio" name="sex" value="male" defaultChecked />男
          <input onChange={this.handleRadioClick} type="radio" name="sex" value="female" />女<br />
          <label>喜欢的颜色</label><br />
          <input onClick={this.handleCheckboxClick} type="checkbox" name="colors" value="red" />红
          <input onClick={this.handleCheckboxClick} type="checkbox" name="colors" value="yellow" />黄
          <input onClick={this.handleCheckboxClick} type="checkbox" name="colors" value="blue" />蓝
          <br />
          <button type="submit">提交</button>
        </form>
      </div>
      );
  }
}
