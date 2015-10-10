require('../spec_helper');

describe('Given a record component,', function(){
  var Cursor;
  var Record;
  var $recording;

  beforeEach(function(){
    Cursor = require('pui-cursor');
    Record = require('../../../app/components/record');
    $recording = new Cursor(false, jasmine.createSpy('recording'));
    React.render(<Record {...{$recording}}/>, root);
  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  describe('when record is false', function(){

    it('renders a record button', function(){
      expect('.record-button').toExist();
    });

    it('renders a record component', function(){
      expect('.record-page').toExist();
    });

    it('does not render the recording class', function(){
      expect('.record-button').not.toHaveClass('recording');
    });
  });
});