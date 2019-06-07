const defineSupportCode = require('cucumber').defineSupportCode;
const jsonpath = require('jsonpath');
const expect = require('unexpected');
const requester = require('./requester');

const PAGINATION_PATHS = {
    'Offset': '$.offset',
    'Total Count': '$.total'
};

const RESOURCE_PATHS = {
    'ID': '$.id',
    'Name': '$.name'
};

defineSupportCode(function ({ When, Then }) {
    When('I retrieve the List Resource', function () {
        return requester.get('api/list');
    });
    Then('the List Response has pagination details:', function (data) {
        return requester.getLastResponse().then((response) => {
            const expected = data.rowsHash();

            Object.keys(expected)
                .filter(key => PAGINATION_PATHS.hasOwnProperty(key))
                .forEach(key => {
                    const expectedValue = expected[key];
                    const path = PAGINATION_PATHS[key];
                    const value = jsonpath.value(response.body, path).toString();
                    expect(value, 'to equal', expectedValue);
                });
        });
    });
    Then('the List Response has records:', function (data) {
        return requester.getLastResponse().then((response) => {
            const expected = data.hashes();

            expect(response.body.data, 'to have length', expected.length);

            expected.forEach((expectedRecord, index) => {
                Object.keys(expectedRecord)
                    .filter(key => RESOURCE_PATHS.hasOwnProperty(key))
                    .forEach(key => {
                        const expectedValue = expectedRecord[key];
                        const path = RESOURCE_PATHS[key];
                        const value = jsonpath.value(response.body.data[index], path).toString();
                        expect(value, 'to equal', expectedValue);
                    });
            });
        });
    });
});
