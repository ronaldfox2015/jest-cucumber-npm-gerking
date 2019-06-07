Feature: Requesting a List Resource
    Scenario: Request the List Resource
        When I retrieve the List Resource
        Then I get an OK response
        And the List Response has pagination details:
            | Offset      | 0   |
            | Total Count | 100 |
        And the List Response has records:
            | ID | Name  |
            | 1  | One   |
            | 2  | Two   |
            | 3  | Three |
            | 4  | Four  |
            | 5  | Five  |
