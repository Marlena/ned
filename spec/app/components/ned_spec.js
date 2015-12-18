require('../spec_helper');

describe('The Ned Component', function(){
  var $application;
  var Cursor;
  var Ned;
  var subject;

  beforeEach(function(){
    Cursor = require('pui-cursor');
    Ned = require('../../../app/components/ned');

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  describe('when recording is false', function(){

    beforeEach(function(){
      $application = new Cursor({recording: false, text: ''});
      subject = React.render(<Ned {...{$application}}/>, root);
    });

    it('renders a record component', function(){
      expect('.record-page').toExist();
    });

    it('renders a writing component', function(){
      expect('.writing').toExist();
    });
  });

  describe('when recording is true', function(){

    beforeEach(function(){
      $application = new Cursor({recording: true, text: ''});
      subject = React.render(<Ned {...{$application}}/>, root);
    });

    it('renders a writing component', function(){
      expect('.writing').toExist();
    });
  });


});