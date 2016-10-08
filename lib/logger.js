const winston = require('winston');

function addLogger(label, conf) {
  const defLevel = 'info';
  const tsFormat = () => (new Date()).toLocaleTimeString();

  winston.loggers.add(label, {console: {
    label: label,
    level: conf[label] || defLevel,
    colorize: conf[label] || true,
    timestamp: tsFormat
  }});
}

module.exports = function(conf) {
  addLogger('server', conf);
  addLogger('auto-close-issues', conf);
  addLogger('timer', conf);

  return winston.loggers.get('server');
};
