require('../spec_helper');

describe('page', function(){

  var Page;

  beforeEach(function(){

    Page = require('../../../app/components/page');

    var Cursor = require('pui-cursor');
    var $application = new Cursor({page: 'record'});

    React.render(<Page {...{$application}}/>, root);

  });

  afterEach(function(){
    React.unmountComponentAtNode(root);
  });

  it('has the page class', function(){
    expect('.page').toExist();
  });
});
