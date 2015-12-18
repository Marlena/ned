var Ned = require('./ned');
var React = require('react/addons');
var Record = require('./record');
var Writing = require('./writing');
var KeyCapture = require('./key_capture');
var types = React.PropTypes;

var Page = React.createClass({

  propTypes: {
    $application: types.object.isRequired
  },

  render(){
    var {$application} = this.props;
    var {page, recording} = $application.get();
    var $text = $application.refine('text');
    var $recording = $application.refine('recording');

    return (
        <div className="page">
          <Ned {...{$application}}/>
        </div>);
  }

});

module.exports = Page;

//To get the right page, was previously doing this:
//{page === 'record' && <Record {...{$recording, $text}}/>}