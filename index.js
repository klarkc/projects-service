var loadJson = require('jsonfile').readFileSync;
var GitHub = require('github-api');
var conf = loadJson('conf.json');

var api = new GitHub();
var interval = conf["refresh-time"] * 1000;

console.log("Welcome, the interval is", interval, "ms");

setInterval(require('lib/auto-close-issues')(api), interval);
