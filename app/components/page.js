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
    var {page} = $application.get();

    return (
        <div className="page">
          {page === 'ned' && <Ned {...{$application}}/>}
        </div>);
  }

});

module.exports = Page;