var React = require('react/addons');
var types = React.PropTypes;
var ShowText = require('./show_text');
var WriteText = require('./write_text');


var Writing = React.createClass({

  propTypes:{
    recording: types.bool.isRequired,
    $text: types.object.isRequired
  },

  render(){
    var {recording, $text} = this.props;
    var text = $text.get();
    return (
        <div className="writing">
          {(!recording) && <ShowText {...{text}}/>}
          {recording && <WriteText {...{$text}}/>}
        </div>
    );
  }
});

module.exports = Writing;