const assert = require('chai').assert;
const spawn = require('child_process').spawn;

describe('service initialization', function() {
  let child, testCount = 2;

  let testsPromise = new Promise((resolve) => {
    afterEach(() => {
      if (--testCount === 1) {
        resolve();
      }
    });
  });

  before(function() {
      child = spawn('node', ['index.js']);
  });

  it('should output "We are ready"', function(done) {
    child.stdout.on('data', (d) => {
        assert.include(d.toString(), 'We are ready');
        done();
    });
  });

  it('should not error or exit', function() {
    return new Promise((resolve, reject) => {
      child.on('error', reject);
      child.on('exit', reject);

      testsPromise.then(resolve);
    });
  });
});
