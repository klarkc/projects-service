# projects-service

[![build status][travis-image]][travis-url]
[![Code Climate][cc-image]][cc-url]
[![Coverage][cover-image]][cover-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]


[travis-image]: https://img.shields.io/travis/klarkc/projects-service/master.svg?maxAge=7200
[travis-url]: https://travis-ci.org/klarkc/projects-service
[cc-image]: https://img.shields.io/codeclimate/github/klarkc/projects-service.svg?maxAge=7200
[cc-url]: https://codeclimate.com/github/klarkc/projects-service
[cover-image]: https://img.shields.io/codeclimate/coverage/github/klarkc/projects-service.svg?maxAge=7200
[cover-url]: https://codeclimate.com/github/klarkc/projects-service/coverage
[david-image]: https://img.shields.io/david/klarkc/projects-service.svg?maxAge=7200
[david-url]: https://david-dm.org/klarkc/projects-service
[node-image]: https://img.shields.io/badge/node.js-%3E=_6-green.svg?maxAge=7200
[node-url]: http://nodejs.org/download/

Just a NodeJS micro service to take actions based on GitHub Projects API

## Instructions

Change your `conf.json` as below.

* `refresh-time`: Time in seconds to refresh data, requesting new data
* `actions`: List of actions that this service will take
  * `auto-close-issues`: List of project columns that automatic close issues, with:
    * `owner`: Repository owner
    * `repo`: Repository name
    * `project`: Project name
    * `column`: Column name

Install dependencies and execute: `npm install && npm start`
