var React = require('react/addons');
var types = React.PropTypes;
var Record = require('./record');
var Writing = require('./writing');

var Ned = React.createClass({

  propTypes: {
    $application: types.object.isRequired
  },

  render(){

    var {$application} = this.props;
    var {recording} = $application.get();
    var $recording = $application.refine('recording');
    var $text = $application.refine('text');

    return(
        <div>
          <Record {...{$recording, $text}}/>
          <Writing {...{recording, $text}}/>
        </div>);
  }
});


module.exports = Ned;