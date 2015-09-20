require ('../spec_helper');

describe('The write text component', function(){

  var WriteText, subject, textCallbackSpy;

  beforeEach(function(){
    WriteText = require('../../../app/components/write_text');
    const Cursor = require('pui-cursor');
    textCallbackSpy = jasmine.createSpy('text');
    const $text = new Cursor('', textCallbackSpy);
    React.render(<WriteText {...{$text}}/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders', function(){
    expect('.write-text').toExist();
  });

  describe('when the text area is changed', function() {
    const text = 'some new text';
    beforeEach(function() {
      $('.write-text').simulate('change', {target: {value: text}});
    });

    it('updates the text cursor', function() {
      expect(textCallbackSpy).toHaveBeenCalledWith(text);
    });
  });
});