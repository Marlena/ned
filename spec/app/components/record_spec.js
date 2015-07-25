require('../spec_helper');

describe('the record component', function(){
  var Record;

  beforeEach(function(){
    Record = require('../../../app/components/record');
    React.render(<Record/>, root);

  });

  afterEach(function(){
      React.unmountComponentAtNode(root);
  });

 it('renders a record button', function(){
   expect('.record-button').toExist();
 });

});