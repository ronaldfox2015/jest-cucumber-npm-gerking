const defineSupportCode = require('cucumber').defineSupportCode;
const httpStatusCodes = require('http-status-codes');
const expect = require('unexpected');
const requester = require('./requester');

defineSupportCode(function ({ Before, Then }) {
    Before(function() {
        return requester.post('api/reset');
    });

    Then(/^I get an? (.+) response$/, function (statusName) {
        const statusCode = httpStatusCodes[statusName.toUpperCase().replace(' ', '_')];

        return requester.getLastResponse()
            .then((response) => {
                expect(response.status, 'to equal', statusCode);
            });
    });
});
