require('../spec_helper');

describe('The write text component', function(){

  var textCallbackSpy,
      WriteText;

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

  it('has autofocus', function(){

  });

  describe('when the text area is changed', function() {
    const text = 'You can do this.';

    beforeEach(function(){
      $('.write-text').simulate('change', {target: {value: text}});
    });

    it('updates the text cursor', function() {
      expect(textCallbackSpy).toHaveBeenCalledWith(text);
    });
  });

});
