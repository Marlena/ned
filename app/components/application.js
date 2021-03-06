require('babel/polyfill');
var Cursor = require('pui-cursor');
var Layout = require('../../server/components/layout');
var Page = require('./page');
var AppHeader = require('./header');
var React = require('react/addons');

var types = React.PropTypes;

var Application = React.createClass({
  propTypes: {
    config: types.object.isRequired,
    data: types.object.isRequired
  },

  getInitialState(){
    return {
      recording: false,
      page: 'ned',
      text: ''
    };
  },

  render(){
    var $application = new Cursor(this.state, state => this.setState(state));
    return (
        <div>
          <AppHeader/>
          <Page {...{$application}}/>
        </div>
    );
  }
});

Layout.init(Application);

module.exports = Application;
