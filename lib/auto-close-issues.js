let logger = require('winston').loggers.get('auto-close-issues');

function pickProjectNumber(projects, name) {
  return new Promise((resolve, reject) => {
    logger.debug('looking for a project that matches ', name);
    for (let project of projects) {
      if (project.name === name) {
        logger.debug('found a project that matches ', name);
        resolve(project.number);
      }
    }

    reject(new Error('project not found'));
  });
}

function pickColumnId(columns, name) {
  return new Promise((resolve, reject) => {
    logger.debug('looking for a column that matches ', name);
    for (let column of columns) {
      if (column.name === name) {
        logger.debug('found a column that matches ', name);
        resolve(column.id);
      }
    }

    reject(new Error('column not found'));
  });
}

function filterCards(cards) {
  return new Promise((resolve) => {
    logger.debug('filtering cards, we want only cards with issues ', name);
    let issueCards = [];

    for (let card of cards) {
      if (card['content_url'].include('issues')) {
        logger.debug('found a card have issue ', name);
        issueCards.push(card);
      }
    }

    resolve(issueCards);
  });
}

function fetchIssues(issues, cards) {
  return new Promise((resolve) => {
    resolve(cards);
  });
}

module.exports = function(api){
  logger.log('verbose', 'loading');
  return (records) => {
    logger.verbose('running', records.length, 'actions(s)');

    let tasks = records.map((item, i) => {
      let repo = api.getRepo(item.owner, item.repo);
      let issues = api.getIssues(item.owner, item.repo);
      logger.debug('starting action', i);
      return repo.listProjects()
        .then(projects => pickProjectNumber(projects, item.project))
        .then(projectNumber => repo.listProjectColumns(projectNumber))
        .then(columns => pickColumnId(columns, item.column))
        .then(columnId => repo.listProjectCards(columnId))
        .then(cards => filterCards(cards))
        .then(issueCards => fetchIssues(issues, issueCards))
        .then((cards) => {
          logger.debug(cards);
          logger.debug('completed action', i);
        });
    });

    Promise.all(tasks).then(()=> {
      logger.verbose(tasks.length, 'actions finished');
    });
  }
}
