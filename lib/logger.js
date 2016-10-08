const winston = require('winston');

function addLogger(label, conf) {
  const defLevel = 'info';
  const tsFormat = () => (new Date()).toLocaleTimeString();

  return {console: {
    label: label,
    level: conf[label] || defLevel,
    colorize: conf[label] || true,
    timestamp: tsFormat
  }}
}

module.exports = function(conf) {
  winston.loggers.add(addLogger('server', conf));
  winston.loggers.add(addLogger('auto-close-issues', conf));
  winston.loggers.add(addLogger('timer', conf));
  
  return winston.loggers.get('server');
};
