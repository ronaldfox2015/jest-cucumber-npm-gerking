const defineSupportCode = require('cucumber').defineSupportCode;
const requester = require('./requester');

defineSupportCode(function ({ Before, Given }) {
    Before(function() {
        requester.clearAuthentication();
    });

    Given('I have authenticated as user {stringInDoubleQuotes} with password {stringInDoubleQuotes}', function(username, password) {
        return requester.authenticate(username, password);
    });
});
