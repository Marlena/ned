require('../spec_helper');

describe('The ShowText Component', function(){
  const text = 'Love is the first seed of the soul.';
  var ShowText, subject;

  beforeEach(function(){
    ShowText = require('../../../app/components/show_text');
    subject = React.render(<ShowText text={text}/>, root);
  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders a div with the .show-text class', function(){
    expect('.show-text').toExist();
  });

  it('renders the text', function() {
    expect('.show-text').toContainText(text);
  });
});