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
    if (!this.props.recording){

      return(
          <div className="writing">
            <ShowText/>
          </div>);
    }
    return(

    <div className="writing">
      <WriteText/>
    </div>);
  }

});

module.exports = Writing;