require ('../spec_helper');

describe('The write text component', function(){

  var WriteText, subject;

  beforeEach(function(){
    WriteText = require('../../../app/components/write_text');

    React.render(<WriteText/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders', function(){
    expect('.write-text').toExist();
  });

});