require('../spec_helper');

describe('KeyCapture', function() {

  var textCallbackSpy;
  beforeEach(function() {
    var KeyCapture = require('../../../app/components/key_capture');
    const Cursor = require('pui-cursor');
    textCallbackSpy = jasmine.createSpy('text');
    const $text = new Cursor('', textCallbackSpy);
    React.render(<KeyCapture {...{$text}}/>, root);
  });

  describe('when a keyup event is triggered with e', function() {
    var pressedKey = 'e';
    beforeEach(function(){
      var event = document.createEvent('HTMLEvents');
      event.initEvent('keyUp', true, false);
      event.keyCode = pressedKey.charCodeAt(0);
      document.body.dispatchEvent(event);
    });

    it('saves it into the text cursor', function() {
      expect(textCallbackSpy).toHaveBeenCalledWith(pressedKey);
    });
  });
});
