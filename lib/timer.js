module.exports = function(action, values, interval) {
  setInterval(() => {
    console.log('[timer] executing scheduled actions')
    action(values);
  }, interval * 1000);
}
