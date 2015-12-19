require('../spec_helper');

describe('The page component', function(){

  var Cursor;
  var Ned;
  var Page;
  var subject;

  beforeEach(function(){

    Cursor = require('pui-cursor');
    Ned = require('../../../app/components/ned');
    Page = require('../../../app/components/page');

    spyOn(Ned.prototype, 'render').and.callThrough();

    var $application = new Cursor({page: 'ned', recording: false, text: ''}, jasmine.createSpy('application'));
    subject = React.render(<Page {...{$application}}/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('has the page class', function(){
    expect('.page').toExist();
  });

  it('renders a ned component', function(){
    expect(Ned.prototype.render).toHaveBeenCalled();
  });


});
