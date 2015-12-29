import React from 'react';

class Help extends React.Component {
  constructor() {
     super(); //this を使用する前に必要ラヂイ
     this.state = {
        text : 'お前は何をしている',
        isDisabled : false
     }
  }

  handleClick() {
     this.setState({
         text: 'あぁクリックね'
     });
     this.setState({
         isDisabled: true
     });
  }

  render() {
     return (
         <div>
             {this.state.text}
             <button onClick={
                       this.handleClick.bind(this)
                     }
                     disabled={this.state.isDisabled}
              >
               変更
             </button>
         </div>
     );
  }
}

export default Help;
