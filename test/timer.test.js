const assert = require('chai').assert;
const timer = require('../lib/timer');

describe('timer', function() {
  it('should call a task with values', function(done) {
    let myObj = {};
    timer((val) => {
      assert.equal(myObj, val);
      done();
    }, myObj, 0.01);
  })
});
