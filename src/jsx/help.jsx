import React from 'react';
import NumberInput from './numberInput';

export default class MathBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numA : 0,
      numB : 0,
      total : 0
    }
  }
  sum() {
    console.log(this.state.numA,this.state.numB);
    const _total = this.state.numA + this.state.numB;
    this.setState({
      total : _total
    });
  }
  onChangeA(num) {
    this.setState({
      numA : num
    });
    this.sum();
  }
  onChangeB(num) {
    this.setState({
      numB : num
    });
    this.sum();
  }
  render() {
    return (
      <div>
        <NumberInput
          handleChange={this.onChangeA.bind(this)}
        />
        <NumberInput
          handleChange={this.onChangeB.bind(this)}
        />
      <p>合計:{this.state.total}</p>
      </div>
    );
  }
}

// class Help extends React.Component {
//   constructor() {
//      super(); //this を使用する前に必要ラヂイ
//      this.state = {
//         text : 'お前は何をしている',
//         isDisabled : false
//      }
//   }
//
//   handleClick() {
//      this.setState({
//          text: 'あぁクリックね'
//      });
//      this.setState({
//          isDisabled: true
//      });
//   }
//
//   render() {
//      return (
//          <div>
//              {this.state.text}
//              <button onClick={
//                        this.handleClick.bind(this)
//                      }
//                      disabled={this.state.isDisabled}
//               >
//                変更
//              </button>
//          </div>
//      );
//   }
// }

// export default Help;
