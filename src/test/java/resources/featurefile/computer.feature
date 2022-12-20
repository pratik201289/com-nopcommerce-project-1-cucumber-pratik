Feature: Computer Test
  As a user I want to add a product in cart successfully

  @sanity @regression
  Scenario: User should navigate computer page successfully
    Given I am on home page
    When Click on computer tab
    Then Verify "Computers" text

  @smoke @regression
  Scenario: User should navigate desktop page successfully
    Given I am on home page
    When Click on computer tab
    And Click on desktop link
    Then Verify "Desktops" message

  @regression
  Scenario Outline: User should build own computer and add in cart successfully
    Given I am on home page
    When Click on computer tab
    And Click on desktop link
    And Click on product name "Build your own computer"
    And Select processor "<processor>"
    And Select RAM "<ram>"
    And Select HDD "<hdd>"
    And Select OS "<os>"
    And Select Software "<software>"
    And Click on add to cart button
    Then Verify "The product has been added to your shopping cart"
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |
