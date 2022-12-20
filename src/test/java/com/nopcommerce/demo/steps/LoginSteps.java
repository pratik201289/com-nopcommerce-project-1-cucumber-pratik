package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should able to see the message \"([^\"]*)\"$")
    public void iShouldAbleToSeeTheMessage(String expected) {
        Assert.assertEquals("Welcome message not displayed", expected, new LoginPage().getWelcomeText());
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pass) {
        new LoginPage().enterPassword(pass);
    }

    @And("^CLick on Login Button$")
    public void clickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^Verify error message$")
    public void verifyErrorMessage() {
        String expectedError = "Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found";
        String actualError = new LoginPage().getErrorMessage();
        Assert.assertEquals("Error message is not displayed", expectedError, actualError);
    }

    @Then("^Verify logout link is displayed$")
    public void verifyLogoutLinkIsDisplayed() {
        Assert.assertTrue("Logout link is not displayed", new HomePage().isLogOutLinkDisplay());
    }

    @And("^Click on logout link$")
    public void clickOnLogoutLink() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^Verify login link is displayed$")
    public void verifyLoginLinkIsDisplayed() {
        Assert.assertTrue("Login link is not displayed", new HomePage().isLogInLinkDisplay());
    }
}
