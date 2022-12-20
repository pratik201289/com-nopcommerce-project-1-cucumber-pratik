package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.logging.Handler;

public class RegisterSteps {
    @When("^I click on Register Link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should able to see \"([^\"]*)\" text$")
    public void iShouldAbleToSeeText(String expectedText) {
        Assert.assertEquals("Register message is not displayed", expectedText, new RegisterPage().getRegisterText());
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @And("^Verify the first error message \"([^\"]*)\"$")
    public void verifyTheFirstErrorMessage(String errorMessage) {
        Assert.assertEquals("First name is required", errorMessage, new RegisterPage().getValidationErrorMessageForField("FirstName"));
    }

    @And("^Verify the second error message \"([^\"]*)\"$")
    public void verifyTheSecondErrorMessage(String errorMessage) {
        Assert.assertEquals("Last name is required", errorMessage, new RegisterPage().getValidationErrorMessageForField("LastName"));

    }

    @And("^Verify the third error message \"([^\"]*)\"$")
    public void verifyTheThirdErrorMessage(String errorMessage) {
        Assert.assertEquals("Email is required", errorMessage, new RegisterPage().getValidationErrorMessageForField("Email"));
    }

    @And("^Verify the fourth error message \"([^\"]*)\"$")
    public void verifyTheFourthErrorMessage(String errorMessage) {
        Assert.assertEquals("Password is required", errorMessage, new RegisterPage().getValidationErrorMessageForField("Password"));
    }

    @Then("^Verify the sixth error message \"([^\"]*)\"$")
    public void verifyTheSixthErrorMessage(String errorMessage) {
        Assert.assertEquals("Confirm password is required", errorMessage, new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"));
    }

    @And("^Select gender$")
    public void selectGender() {
        new RegisterPage().selectGender("Male");
    }

    @And("^Enter first name$")
    public void enterFirstName() {
        new RegisterPage().enterFirstName("James");
    }

    @And("^Enter last name$")
    public void enterLastName() {
        new RegisterPage().enterLastName("Gosling");
    }


    @And("^Select day month and year$")
    public void selectDayMonthAndYear() {
        new RegisterPage().selectDateOfBirth("10","March","1997");
    }

    @And("^Enter email$")
    public void enterEmail() {
        new RegisterPage().enterEmail(Utility.getRandomString(4)+"@gmail.com");
    }

    @And("^Enter password$")
    public void enterPassword() {
        new RegisterPage().enterPassword("John@001234");
    }

    @And("^Enter confirm password$")
    public void enterConfirmPassword() {
        new RegisterPage().enterConfirmPassword("John@001234");

    }

    @Then("^Verify message \"([^\"]*)\"$")
    public void verifyMessage(String expMess) {
        Assert.assertEquals("Your registration completed is not displayed",expMess,new RegisterPage().getYourRegCompletedText());
    }
}
