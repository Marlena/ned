require('../spec_helper');

describe('Application', function() {
  const baseApiUrl = 'http://example.com';
  const drugNames = ['morphine', 'water', 'coffee'];
  var Application;

  beforeEach(function() {
    Application = require('../../../app/components/application');
    spyOn(Application.prototype, 'render').and.callThrough();
    React.render(<Application {...{config: {baseApiUrl}, data: {drugNames}}}></Application>, root);
  });

  afterEach(function() {
    React.unmountComponentAtNode(root);
  });

  it('renders a div', function() {
    expect('.hello').toExist();
  });




});