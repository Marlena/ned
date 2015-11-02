require('../spec_helper');

describe('page', function(){

  var Cursor, Page, subject;

  beforeEach(function(){

    Page = require('../../../app/components/page');

    Cursor = require('pui-cursor');
    var $application = new Cursor({page: 'record', recording: false, text: ''}, jasmine.createSpy('application'));
    subject = React.render(<Page {...{$application}}/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('has the page class', function(){
    expect('.page').toExist();
  });

  describe('when recording is true', function(){
    beforeEach(function() {
      var $application = new Cursor({page: 'record', recording: true, text: ''}, jasmine.createSpy('application'));
      subject.setProps({$application});
    });

    it('adds the recording class to the button', function(){
      expect('.record-button').toHaveClass('recording');
    });

    it('renders a writing component.', function(){
      expect('.writing').toExist();
    });
  });
});
