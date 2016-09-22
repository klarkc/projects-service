let logger = require('winston').loggers.get('timer');

module.exports = function(action, values, interval) {
  setInterval(() => {
    logger.verbose(interval + 's has been passed, executing scheduled actions');
    action(values);
  }, interval * 1000);
}
