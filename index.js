let GitHub = require('github-api');
let loadJson = require('jsonfile').readFileSync;
let conf = loadJson('./conf.json');

let api = new GitHub();
let interval = conf["refresh-time"] * 1000;

console.log("Welcome, the interval is", interval, "ms");

setInterval(require('./lib/auto-close-issues')(api), interval);
