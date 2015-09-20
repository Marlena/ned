var React = require('react/addons');
var types = React.PropTypes;

var ShowText = React.createClass({
  propTypes: {
    text: types.string.isRequired
  },

  render(){
    var text = this.props.text;
    return (<p className="show-text">{text}</p>);
  }

});

module.exports = ShowText;