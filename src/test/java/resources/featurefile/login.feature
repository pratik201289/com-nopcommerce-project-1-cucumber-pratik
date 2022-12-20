Feature: Login Test
  As user I want to login into nop commerce website

  @sanity @regression
  Scenario: User should navigate to login page successfully
    Given I am on home page
    When I click on login link
    Then I should able to see the message "Welcome, Please Sign In!"

  @smoke @regression
  Scenario:Verify the error message with inValid credentials
    Given I am on home page
    When I click on login link
    And I enter email "abc112@gmail.com"
    And I enter password "abc112"
    And CLick on Login Button
    Then Verify error message

  @regression
  Scenario: User should login with valid credentials
    Given I am on home page
    When I click on login link
    And I enter email "jvyas@gmail.com"
    And I enter password "jaiminivyas"
    And CLick on Login Button
    Then Verify logout link is displayed

  @regression
  Scenario: User should logout successfully
    Given I am on home page
    When I click on login link
    And I enter email "jvyas@gmail.com"
    And I enter password "jaiminivyas"
    And CLick on Login Button
    And Click on logout link
    Then Verify login link is displayed