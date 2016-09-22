const winston = require('winston');

module.exports = function(conf) {
  const defLevel = 'info';
  const tsFormat = () => (new Date()).toLocaleTimeString();

  winston.loggers.add('server', {console: {
    label: 'server',
    level: conf.server || defLevel,
    colorize: conf.colorize || true,
    timestamp: tsFormat
  }});
  winston.loggers.add('auto-close-issues', {console: {
    label: 'auto-close-issues',
    level: conf['auto-close-issues'] || defLevel,
    colorize: conf.colorize || true,
    timestamp: tsFormat
  }});
  winston.loggers.add('timer', {console: {
    label: 'timer',
    level: conf.timer || defLevel,
    colorize: conf.colorize || true,
    timestamp: tsFormat
  }});

  return winston.loggers.get('server');
};
