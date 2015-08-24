var React = require('react/addons');
var types = React.PropTypes;


var Writing = React.createClass({

  propTypes:{
    recording: types.bool.isRequired,
    $text: types.object.isRequired
  },

  render(){
    if (!this.props.recording){
      return null;
    }
    return(
        <div className="writing">
    <form>
      <textarea className="writing-area"></textarea>
      </form>
    </div>);
  }

});

module.exports = Writing;