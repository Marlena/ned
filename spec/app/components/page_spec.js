require('../spec_helper');

describe('page', function(){

  var Page;

  beforeEach(function(){
    Page = require('../../../app/components/page');
    React.render(<Page/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('has the page class', function(){
    expect('.blah').toExist();
  });
});
