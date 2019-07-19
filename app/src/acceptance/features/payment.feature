Feature: Pay for the purchase of Web products with Visa
    AS a company user 
    I want to make a web product
    Scenario: pay Basic Notice
        When I'm generating a cart with the user "3398504":
            | customer_id   | product_id    | quantity  |
            | 3398504       | 29            |   5       |
            | 3398504       | 28            |   2       |

        And I'm checking the payment with the user "3398504":

        Then I get an OK response
        And the Insecure Resource has details:



