var React = require('react/addons');

var Header = React.createClass({

  render(){
    return(
      <header className="header">
        N.E.D.
        <div>Ned is not an editor.</div>
      </header>
    );
  }
});

module.exports = Header;