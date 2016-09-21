module.exports = function(api){
  return function() {
    console.log("=> Running scheduled auto-close-issues task", api);
  }
}
