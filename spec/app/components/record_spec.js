require('../spec_helper');

  describe('Given a record component,', function(){
    var Cursor;
    var Record;
    var $recording;

    describe('when record is false,', function(){


      beforeEach(function(){
        Cursor = require('pui-cursor');
        Record = require('../../../app/components/record');
        $recording = new Cursor(false, jasmine.createSpy('recording'));
        var $text = new Cursor('You can do this.', jasmine.createSpy('text'));
        React.render(<Record {...{$recording, $text}}/>, root);
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
  });

    describe('when recording is false and record is clicked,', function(){
      var recordingSpy;
      var $text;
      var textCallbackSpy;

      beforeEach(function(){
        Cursor = require('pui-cursor');
        Record = require('../../../app/components/record');
        $recording = new Cursor(false, jasmine.createSpy('recording'));
        recordingSpy = jasmine.createSpy('recording');
        textCallbackSpy = jasmine.createSpy('text');
        $text = new Cursor('You can do this.', textCallbackSpy);

        React.render(<Record {...{$recording, $text}}/>, root);
        $('.record-button').simulate('click');

      });

      afterEach(function(){
        React.unmountComponentAtNode(root);
      });

    it('updates the text to be empty.', function() {
      expect(textCallbackSpy).toHaveBeenCalledWith('');
    });
  });
});

