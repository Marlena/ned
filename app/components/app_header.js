var React = require('react/addons');

var AppHeader = React.createClass({

  render(){
    return(
      <header className="app-header">
        N.E.D.
        <div>Ned is not an editor.</div>
      </header>
    );
  }
});

module.exports = AppHeader;