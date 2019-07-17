Feature: Make payments
    Scenario: Pay with the middle PE
        When I'm generating a cart:
        | customer_id                           | 3398504     |
        | products_aviso_web.id                 | 49          |
        | products_aviso_web.quantity           | 5           |
        | products_aviso_web.id                 | 59          |
        | products_aviso_web.quantity           | 6           |

        Then I get an OK response
        And the Insecure Resource has details:



