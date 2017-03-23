Feature: Issuing invoices for companies
  In order to avoid errors
  As a Teddysoft employee
  I want to brainlessly issue an company invoice with tax included price


  Scenario Outline: Successful issuing invoices using tax included prices
    Given Ｔhe VAT rate is 0.05
    And   the tax included price provided is <tax_included>
    When  I issue a company invoice
    Then  I should see the VAT is <VAT>
    And   the tax excluded price is <tax_excluded>
    Examples:
    # VAT = Value Added Tax
      | tax_included    | VAT   | tax_excluded | notes            |
      | 36000           | 1714   | 34286       | Refactoring定價  |
      | 17900           | 852   | 17048        | Scrum早鳥        |
      | 17000           | 810   | 16190        | Scrum泰迪之友     |
      | 21000           | 1000  | 20000        | Scrum定價        |
      | 99              | 5     | 94           | 四捨五入案例       |
      | 1               | 0     | 1            | 邊界條件           |
      | 10              | 0     | 10           | 邊界條件           |
      | 11              | 1     | 10           | 邊界條件           |
      | 0               | 0     | 0            | 可以開零元發票     |



  Scenario Outline: Successful issuing invoices using tax excluded prices
    Given Ｔhe VAT rate is 0.05
    And   the tax excluded price provided is <tax_excluded>
    When  I issue a company invoice
    Then  I should see the VAT is <VAT>
    And   the tax included price is <tax_included>
    Examples:
    # VAT = Value Added Tax
      | tax_included    | VAT   | tax_excluded | notes            |
      | 36000           | 1714   | 34286       | Refactoring定價  |
      | 17900           | 852   | 17048        | Scrum早鳥        |
      | 17000           | 810   | 16190        | Scrum泰迪之友     |
      | 21000           | 1000  | 20000        | Scrum定價        |
      | 99              | 5     | 94           | 四捨五入案例       |
      | 1               | 0     | 1            | 邊界條件         |
    #  | 10              | 0     | 10           | 此案例不適用     |
      | 11              | 1     | 10           | 邊界條件         |
      | 12              | 1     | 11           | 邊界條件         |
      | 0               | 0     | 0            | 可以開零元發票    |


  Scenario: A special case to issue an invoice by assigning 10$ to tax included prices first and tax excluded prices second
    Given Ｔhe VAT rate is 0.05
    And   the tax included price provided is 10
    And   the tax excluded price provided is 10
    When  I issue a company invoice
    Then  I should see the VAT is 1
    And   the tax included price is 11
    And   the tax excluded price is 10


  Scenario: A special case to issue an invoice by assigning 10$ to tax excluded prices first and tax included prices second
    Given Ｔhe VAT rate is 0.05
    And   the tax excluded price provided is 10
    And   the tax included price provided is 10
    When  I issue a company invoice
    Then  I should see the VAT is 0
    And   the tax included price is 10
    And   the tax excluded price is 10