var React = require('react/addons');
var Record = require('./record');
var Writing = require('./writing');

var types = React.PropTypes;

var Page = React.createClass({

  propTypes: {
    $application: types.object.isRequired
  },

  render(){
    var {$application} = this.props;
    var {page, recording} = $application.get();

    return (
        <div className="page">
          {page === 'record' && <Record {...{$recording: $application.refine('recording')}}/>}
          <Writing {...{recording, $text: $application.refine('text')}}/>
        </div>);
  }

});


module.exports = Page;