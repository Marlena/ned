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
          <header className="ned-header">
            <h1>N.E.D.</h1>
            <div>Ned is not an editor</div>
          </header>

          {page === 'record' && <Record {...{$recording, $text}}/>}
          <Writing {...{recording, $text}}/>
        </div>);
  }

});

module.exports = Page;