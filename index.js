let GitHub = require('github-api');
let loadJson = require('jsonfile').readFileSync;

let api = new GitHub();

let conf = loadJson('./conf.json');
let interval = conf['refresh-time'];

let logger = require('./lib/logger.js')(conf.log);

let timer = require('./lib/timer.js');
let autoCloseIssues = require('./lib/auto-close-issues')(api);

timer(autoCloseIssues, conf.actions['auto-close-issues'], interval);

logger.info('We are ready to rock! The refresh interval is of', interval + 's');
