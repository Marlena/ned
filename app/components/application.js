require('babel/polyfill');
//var Cursor = require('pui-cursor');
var Layout = require('../../server/components/layout');
var React = require('react/addons');
var Hello = require ('./hello');

var types = React.PropTypes;

var Application = React.createClass({
  propTypes: {
    config: types.object.isRequired,
    data: types.object.isRequired
  },

  render() {
    return (<div><Hello/></div>);

  }
});

Layout.init(Application);

module.exports = Application;
