require('../spec_helper');

describe('Application', function() {
  const baseApiUrl = 'http://example.com';
  var Application, Page, KeyCapture;

  beforeEach(function() {
    Application = require('../../../app/components/application');
    Page = require('../../../app/components/page');
    spyOn(Page.prototype, 'render').and.callThrough();
    spyOn(Application.prototype, 'render').and.callThrough();
    React.render(<Application {...{config: {baseApiUrl}}}/>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('renders a page', function() {
    expect(Page.prototype.render).toHaveBeenCalled();
  });

  it('initially renders a record component', function(){
    expect('.record-page').toExist();
  });

});