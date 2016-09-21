let GitHub = require('github-api');
let loadJson = require('jsonfile').readFileSync;
let timer = require('./lib/timer.js');
let conf = loadJson('./conf.json');
let api = new GitHub();

let autoCloseIssues = require('./lib/auto-close-issues')(api);

let interval = conf["refresh-time"];

console.log("\nWelcome! The refresh interval is", interval, "s");

timer(autoCloseIssues, conf.actions["auto-close-issues"], interval);
