# Integration Testing your HTTP API with Cucumber

[![Build Status](https://semaphoreci.com/api/v1/grahamcox82/cucumber-integration-testing/branches/master/badge.svg)](https://semaphoreci.com/grahamcox82/cucumber-integration-testing)

This repository is an example application for demonstrating Cucumber testing of an HTTP API.
The tag "application-to-test" shows the application with no tests at all, and all commits after this tag show adding Cucumber tests to the system.

## Application

The application in question has the following endpoints:

* Getting an Insecure resource - `GET /api/insecure`
* Getting a Secure resource, which needs an access token to retrieve - `GET /api/secure`
* Getting an Access Token by authenticating - `GET /api/auth`
* Getting a List of resources - `GET /api/list`
* Modifying a resource - `POST /api/insecure`
* Resetting the system to a known state - `POST /api/reset`

## Structure

The application itself lives in `src/server`. This can be run manually by executing `node src/server/index.js`.

The tests all live in `src/acceptance`. These can be executed by running `grunt acceptance`, which will:

* Start the server
* Run the tests against the server
* Shut everything down

