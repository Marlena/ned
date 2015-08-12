require('../spec_helper');

describe('the record component', function(){
  var Record;

  beforeEach(function(){
    Record = require('../../../app/components/record');

    React.render(<Record/>, root);
  });

  afterEach(function(){
      React.unmountComponentAtNode(root);
  });

  it('renders a record button', function(){
   expect('.record-button').toExist();
 });

  it('renders a record component', function(){
    expect('.record-page').toExist();
  });

  it('does not render the recording class', function(){
    expect('.record-button').not.toHaveClass('recording');
  });

  describe('user clicks the button', function(){
    it('adds the recording class to the button', function(){
      $('.record-button').simulate('click');
      expect('.record-button').toHaveClass('recording');
    });
    
  })


});