# projects-service
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
