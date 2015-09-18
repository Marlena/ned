var React = require('react/addons');
var types = React.PropTypes;
var ShowText = require('./show_text');


var Writing = React.createClass({

  propTypes:{
    recording: types.bool.isRequired,
    $text: types.object.isRequired
  },

  render(){
    if (!this.props.recording){
      return(<div className="writing">
        <ShowText/>
      </div>);
    }
    return(
    //{page === 'compare' && <Compare {...{$application}}/>}

    <div className="writing">
          <form>
            <textarea className="write-text"></textarea>
          </form>
        </div>);
  }

});

module.exports = Writing;