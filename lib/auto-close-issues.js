function autoCloseIssue(repo){
  console.log('[auto-close-issues] running for', repo.__fullname);
  return repo.getDetails();
}

module.exports = function(api){
  console.log("[auto-close-issues] loading");

  return (records) => {
    console.log("[auto-close-issues] running", records.length, "request(s)");
    let tasks = records.map((item, i) => {
      let repo = api.getRepo(item.owner, item.repo);
      return autoCloseIssue(repo).then((res) => {
          console.log("[auto-close-issues] response received")
      });
    });
    Promise.all(tasks).then(()=> {
      console.log("[auto-close-issues]", tasks.length, "requests finished");
    });
  }
}
