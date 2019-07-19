Feature: Pay for the purchase of Web products with Visa
    AS a company user 
    I want to make a web product
    Scenario: pay Basic Notice
        When I'm generating a cart:
            | customer_id   | product_id    | quantity  |
            | 3398504       | 29            |   5       |
        And I'm checking the payment

        Then I get an OK response
        And the Insecure Resource has details:



