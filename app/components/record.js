var React = require('react/addons');

var Record = React.createClass({

  getInitialState(){
    return {recording: false}
  },

  recording(){
    this.setState({recording: !this.state.recording});
  },

  render(){
    var className = 'record-button';

    if(this.state.recording){
      className += ' recording';
    }
    return(<div className="record-page">
      <button onClick={this.recording} className={className}></button>
      </div>);
  }

});


module.exports = Record;