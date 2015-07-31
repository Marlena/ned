var React = require('react/addons');
var Record = require('./record');

var types = React.PropTypes;

var Page = React.createClass({

  propTypes: {
    $application: types.object.isRequired
  },

  render(){
    var {$application} = this.props;
    var page = $application.get('page');
    return (<div className="page">
      {page === 'record' && <Record/>}
    </div>);
  }

});


module.exports = Page;