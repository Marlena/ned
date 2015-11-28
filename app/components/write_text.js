var React = require('react/addons');

const types = React.PropTypes;

var WriteText = React.createClass({
  propTypes: {
    $text: types.object.isRequired
  },

  change(e){
    this.props.$text.set(e.target.value);
  },

  render(){
    const text = this.props.$text.get();
    return (<textarea className="write-text" onChange={this.change} value={text} />);
  }

});

module.exports = WriteText;