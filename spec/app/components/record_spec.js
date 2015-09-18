require('../spec_helper');

describe('Given a record component,', function(){
  var Record;
  var Writing;

  beforeEach(function(){
    Record = require('../../../app/components/record');
    Writing = require('../../../app/components/writing');
    var Cursor = require('pui-cursor');
    var $recording = new Cursor(false, jasmine.createSpy('recording'));
    React.render(<Record {...{$recording}}/>, root);
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

  it('does not render a WriteText component', function(){
    expect('.write-text').not.toExist();
  });
});