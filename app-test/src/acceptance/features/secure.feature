Feature: Requesting a Secure Resource
    Scenario: Request the Secure Resource when not authenticated
        When I retrieve the Secure Resource
        Then I get a Unauthorized response

    Scenario: Request the Secure Resource when authenticated
        Given I have authenticated as user "test" with password "P@ssw0rd"
        When I retrieve the Secure Resource
        Then I get an OK response
        And the Secure Resource has details:
            | ID   | 1      |
            | Name | Graham |
