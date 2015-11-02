var React = require('react/addons');
var types = React.PropTypes;


var Record = React.createClass({

  propTypes: {
    $recording: types.object.isRequired,
    $text: types.object.isRequired
  },

  recording() {
    var {$recording} = this.props;
    var {$text} = this.props;
    var recording = !$recording.get();
    $recording.set(recording);

    if(recording) $text.set('');

  },

  render(){
    var {$recording} = this.props;
    var className = 'record-button';

    if($recording.get()){
      className += ' recording';
    }
    return (<div className="record-page">
      <button onClick={this.recording} className={className}></button>
      </div>);
  }

});

module.exports = Record;