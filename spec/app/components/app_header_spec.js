require ('../spec_helper');

describe('The App Header component', function(){
  var AppHeader, subject;

  beforeEach(function(){

    AppHeader = require('../../../app/components/app_header');
    subject = React.render(<AppHeader/>, root);

  });

  it('renders a header', function(){
    expect('.app-header').toExist();
  });
});