const defineSupportCode = require('cucumber').defineSupportCode;
const jsonpath = require('jsonpath');
const expect = require('unexpected');
const requester = require('./requester');

const RESPONSE_PATHS = {
    'ID': '$.id',
    'Name': '$.name'
};

defineSupportCode(function ({ When, Then }) {
    When('I retrieve the Secure Resource', function() {
        return requester.get('api/secure');
    });
    Then('the Secure Resource has details:', function (data) {
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
