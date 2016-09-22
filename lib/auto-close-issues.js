let logger = require('winston').loggers.get('auto-close-issues');

function autoCloseIssue(repo){
logger.debug('fetching ', repo.__fullname);
  return repo.getDetails();
}

module.exports = function(api){
  logger.log('verbose', 'loading');
  return (records) => {
    logger.verbose("running", records.length, "request(s)");
    let tasks = records.map((item, i) => {
      let repo = api.getRepo(item.owner, item.repo);
      return autoCloseIssue(repo).then((res) => {
          logger.debug("response received for", res.data.full_name)
      });
    });
    Promise.all(tasks).then(()=> {
      logger.verbose(tasks.length, "requests finished");
    });
  }
}
