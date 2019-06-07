const defineSupportCode = require('cucumber').defineSupportCode;
const jsonpath = require('jsonpath');
const expect = require('unexpected');
const requester = require('./requester');

const RESPONSE_PATHS = {
    'Answer': '$.answer',
    'Name': '$.name'
};

defineSupportCode(function ({ When, Then }) {
    When('I retrieve the Insecure Resource', function() {
        return requester.get('api/insecure');
    });

    When('I update the Insecure Resource to have name {stringInDoubleQuotes}', function (newName) {
        return requester.post('api/insecure', { name: newName });
    });

    Then('the Insecure Resource has details:', function(data) {
        return requester.getLastResponse().then((response) => {
            const expected = data.rowsHash();

            Object.keys(expected)
                .filter(key => RESPONSE_PATHS.hasOwnProperty(key))
                .forEach(key => {
                    const expectedValue = expected[key];
                    const path = RESPONSE_PATHS[key];
                    const value = jsonpath.value(response.body, path).toString();
                    expect(value, 'to equal', expectedValue);
                });
        });
    });
});
