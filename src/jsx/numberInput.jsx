import React from 'react';

export default class NumberInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // stateは自分の持ち物であり、mutable
      num : 0
    }
  }
  handleChange(e) {
    e.preventDefault();
    const num = Number(e.target.value);
    if (Number.isNaN(num)){
      //数字以外の時
      this.setState({
        num : 0
      });
    }else{
      //数字だったら
      //親に数字を渡してやる
      this.setState({
        num : num
      })
      this.props.handleChange(num);
    }
  }
  render() {
    return (
        <input
          value={this.state.num}
          onChange={this.handleChange.bind(this)}
          >
        </input>
    );
  }
}
