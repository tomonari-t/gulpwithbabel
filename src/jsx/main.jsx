import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

export default class Hellp extends React.Component {
    getInitialState () {
      return { name: "not clicked"  };
    }
    onClick () {
      this.setState( {name: "clicked" });
    }
    render () {
      return <div onClick={ this.onClick } >{this.state.name}</div>;
    }
}
// var Hello = React.createClass({
//   getInitialState: function () {
//     return { name: "not clicked"  };
//   },
//   onClick: function () {
//     this.setState( {name: "clicked" });
//   },
//   render: function() {
//     return <div onClick={ this.onClick } >{this.state.name}</div>;
//   }
// });
//
// module.exports = Hello;
