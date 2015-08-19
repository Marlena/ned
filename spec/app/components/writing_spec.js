require ('../spec_helper');

describe('The writing component', function(){
  var Writing;
  const recording = true;
  var subject;
  beforeEach(function(){
    Writing = require('../../../app/components/writing');
    var Cursor = require('pui-cursor');
    var $text = new Cursor(null, jasmine.createSpy('text'))

    subject = React.render(<Writing {...{recording, $text}}/>, root);
  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders a div with the writing class', function(){
    expect('.writing').toExist();
  });

  it('renders the writing input.', function(){
    expect('.writing-input').toExist();
  });

  describe('when recording is false', function(){
    it('does not render', function(){

      subject.setProps({recording:false});
      expect('.writing').not.toExist();
    });
  })
});