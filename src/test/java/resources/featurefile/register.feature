Feature: Register Test
  As a user I want to register in to nop commerce successfully

  @sanity @regression
  Scenario: User should navigate register page successfully
    Given I am on home page
    When I click on Register Link
    Then I should able to see "Register" text

  @smoke @regression
  Scenario: Verify first name last name email password confirm password field are mandatory
    Given I am on home page
    When I click on Register Link
    And I click on register button
    And Verify the first error message "First name is required."
    And Verify the second error message "Last name is required."
    And Verify the third error message "Email is required."
    And Verify the fourth error message "Password is required."
    Then Verify the sixth error message "Password is required."

  @regression
  Scenario: User should create account successfully
    Given I am on home page
    When I click on Register Link
    And Select gender
    And Enter first name
    And Enter last name
    And Select day month and year
    And Enter email
    And Enter password
    And Enter confirm password
    And I click on register button
    Then Verify message "Your registration completed"

