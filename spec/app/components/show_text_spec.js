require ('../spec_helper');

describe('The ShowText Component', function(){

  var ShowText, subject;

  beforeEach(function(){

    ShowText = require('../../../app/components/show_text');
    subject = React.render(<ShowText/>, root);
  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders a div with the .show-text class', function(){
    expect('.show-text').toExist();
  });
});