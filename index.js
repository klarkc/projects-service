let loadJson = require('jsonfile').readFileSync;

let conf = loadJson('./conf.json');

let api = {};
let interval = conf["refresh-time"] * 1000;

console.log("Welcome, the interval is", interval, "ms");

setInterval(require('./lib/auto-close-issues')(api), interval);
