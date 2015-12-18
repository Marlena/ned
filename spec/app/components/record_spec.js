require('../spec_helper');

  describe('Given a record component,', function(){
    var Cursor;
    var Record;
    var $recording;
    var subject;
    var $text;


    beforeEach(function(){
      Cursor = require('pui-cursor');
      Record = require('../../../app/components/record');

    });
    describe('when recording is true', function(){
      beforeEach(function() {
        $text = new Cursor('', jasmine.createSpy('text'));
        $recording = new Cursor(true, jasmine.createSpy('recording'));
        subject = React.render(<Record {...{$recording, $text}}/>, root);
        subject.setProps({$recording});

      });

      it('adds the recording class to the button', function(){
        expect('.record-button').toHaveClass('recording');
      });

    });

    describe('when record is false,', function(){
      beforeEach(function(){
        $recording = new Cursor(false, jasmine.createSpy('recording'));
        $text = new Cursor('You can do this.', jasmine.createSpy('text'));
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
      var textCallbackSpy;

      beforeEach(function(){
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

