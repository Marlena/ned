var React = require('react/addons');
var types = React.PropTypes;

var KeyCapture = React.createClass({

  propTypes: {
    $text: types.object.isRequired
  },

  componentDidMount() {
    document.body.addEventListener('keyUp', this.keyup, false);
  },

  componentWillUnmount() {
    document.body.removeEventListener('keyUp', this.keyup);
  },

  keyup(e) {

    var {$text} = this.props;
    console.log(String.fromCharCode(e.keyCode));
    var text = $text.get() + String.fromCharCode(e.keyCode);
    $text.set(text);

  },

  render(){
    return null;
  }
});

module.exports = KeyCapture;