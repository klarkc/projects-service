let logger = require('winston').loggers.get('auto-close-issues');

module.exports = function(api){
  logger.log('verbose', 'loading');
  return (records) => {
    logger.verbose('running', records.length, 'actions(s)');

    let tasks = records.map((item, i) => {
      let repo = api.getRepo(item.owner, item.repo);
      logger.debug('starting action', i);
      return repo.listProjects()
        .then(projects => pickProject(projects, item.project))
        .then(projectNumber => repo.listProjectColumns(projectNumber))
        .then(columns => pickColumn(columns, item.column))
        .then(columnId => repo.listProjectCards(columnId))
        .then(cards => filterIssues(cards))
        .then(issues => closeIssues(issues))
        .then(() => {
          logger.debug('completed action', i);
        });
    });

    Promise.all(tasks).then(()=> {
      logger.verbose(tasks.length, 'actions finished');
    });
  }
}
