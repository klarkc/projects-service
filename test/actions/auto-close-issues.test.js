const assert = require('chai').assert;
const GitHub = require('github-api');
const api = new GitHub();
const autoCloseIssues = require('../../lib/auto-close-issues')(api);

describe('action auto-close-issues', function() {
  it.skip('should close open issues in done column', function() {
    // TODO: should close open issues in done column
  });
});
