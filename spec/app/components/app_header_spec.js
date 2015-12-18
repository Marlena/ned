require ('../spec_helper');

describe('The App Header component', function(){
  var Header, subject;

  beforeEach(function(){

    Header = require('../../../app/components/header');
    subject = React.render(<Header/>, root);

  });

  it('renders a header', function(){
    expect('.header').toExist();
  });
});