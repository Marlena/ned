require('../spec_helper');

describe('hello component', function(){

  var Hello;

  beforeEach(function(){

    Hello = require('../../../app/components/hello');
    spyOn(Hello.prototype, 'render').and.callThrough();
    React.render(<Hello/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('renders a div', function() {
    expect('.hello').toExist();
  });

  it('renders the hello component', function(){
    expect(Hello.prototype.render).toHaveBeenCalled();
  });

});