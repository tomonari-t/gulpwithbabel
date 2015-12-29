import React from 'react';
import ReactDOM from 'react-dom';
import Help from './help.jsx';

console.log(Help);

ReactDOM.render(
  <Help />,
  document.getElementById('example')
);

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
