Feature: Requesting an Insecure Resource
    Scenario: Request the Insecure Resource
        When I retrieve the Insecure Resource
        Then I get an OK response
        And the Insecure Resource has details:
        | Answer | 42     |
        | Name   | Graham |

    Scenario: Update the Insecure Resource
        When I update the Insecure Resource to have name "Fred"
        Then I get an OK response
        And the Insecure Resource has details:
            | Answer | 42   |
            | Name   | Fred |

    Scenario: Update the Insecure Resource and check it is saved
        When I update the Insecure Resource to have name "Fred"
        And I retrieve the Insecure Resource
        Then I get an OK response
        And the Insecure Resource has details:
            | Answer | 42   |
            | Name   | Fred |
