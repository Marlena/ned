require('../spec_helper');

describe('Application', function() {
  const baseApiUrl = 'http://example.com';
  var Application,
      AppHeader,
      Page;

  beforeEach(function() {
    Application = require('../../../app/components/application');
    Page = require('../../../app/components/page');
    AppHeader = require('../../../app/components/app_header');

    spyOn(Page.prototype, 'render').and.callThrough();
    spyOn(Application.prototype, 'render').and.callThrough();
    spyOn(AppHeader.prototype, 'render').and.callThrough();

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

  it('renders a header', function(){
    expect('.app-header').toExist();
    expect(AppHeader.prototype.render).toHaveBeenCalled();
  });

});