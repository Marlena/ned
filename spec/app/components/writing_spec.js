require ('../spec_helper');

describe('The writing component', function(){
  var Writing, ShowText;
  const recording = true;
  var subject;

  beforeEach(function(){
    Writing = require('../../../app/components/writing');
    ShowText = require('../../../app/components/show_text');
    var Cursor = require('pui-cursor');
    var $text = new Cursor(null, jasmine.createSpy('text'));

    subject = React.render(<Writing {...{recording, $text}}/>, root);
  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders a div with the writing class', function(){
    expect('.writing').toExist();
  });

  it ('renders a text area', function(){
    expect('.write-text').toExist();
  });

  describe('when recording is false', function(){

    beforeEach(function(){
      subject.setProps({recording: false});
    });

    it ('renders', function(){
      expect('.writing').toExist();
    });

    it ('renders ShowText', function(){
      expect('.show-text').toExist();
    });
  });
});