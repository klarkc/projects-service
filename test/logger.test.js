const winston = require('winston');
const assert = require('chai').assert;
const setupLogger = require('../lib/logger.js');

describe('logger.js module behavior', function() {
  let conf, defLogger;

  before(function() {
    conf = {
      "server": "info",
      "auto-close-issues": "info",
      "timer": "info",
      "colorize": true
    };
    winston.loggers = new winston.Container();
    defLogger = setupLogger(conf);
  });

  it('should create a server logger', function() {
    let logger = winston.loggers.get('server');
    assert.instanceOf(logger, winston.Logger);
    assert.deepPropertyVal(logger.transports, 'console.label', 'server');
    assert.deepPropertyVal(logger.transports, 'console.level', conf.server);
    assert.isFunction(logger.transports.console.timestamp);
  });

  it('should create an auto-close-issues logger', function() {
    let logger = winston.loggers.get('auto-close-issues');
    assert.instanceOf(logger, winston.Logger);
    assert.deepPropertyVal(logger.transports, 'console.label', 'auto-close-issues');
    assert.deepPropertyVal(logger.transports, 'console.level', conf.server);
    assert.isFunction(logger.transports.console.timestamp);
  });

  it('should create a timer logger', function() {
    let logger = winston.loggers.get('timer');
    assert.instanceOf(logger, winston.Logger);
    assert.deepPropertyVal(logger.transports, 'console.label', 'timer');
    assert.deepPropertyVal(logger.transports, 'console.level', conf.server);
    assert.isFunction(logger.transports.console.timestamp);
  });

  it('should return the default server logger', function() {
    assert.equal(defLogger, winston.loggers.get('server'));
  });
});
