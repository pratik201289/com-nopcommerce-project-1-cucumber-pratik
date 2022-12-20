package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^Click on computer tab$")
    public void clickOnComputerTab() {
        new HomePage().clickOnMenuTab("Computers");
    }

    @Then("^Verify \"([^\"]*)\" text$")
    public void verifyText(String expMess) {
        Assert.assertEquals("Computers page not displayed", expMess, new ComputerPage().getPageTitleText());
    }

    @And("^Click on desktop link$")
    public void clickOnDesktopLink() {
        new ComputerPage().clickOnSubMenu("Desktops");
    }

    @Then("^Verify \"([^\"]*)\" message$")
    public void verifyMessage(String expMess) {
        Assert.assertEquals("Desktops text not displayed", expMess, new ComputerPage().getPageTitleText());
    }

    @And("^Click on product name \"([^\"]*)\"$")
    public void clickOnProductName(String arg0) {
        new DesktopsPage().selectProduct("Build your own computer");
    }

    @And("^Select processor \"([^\"]*)\"$")
    public void selectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^Select RAM \"([^\"]*)\"$")
    public void selectRAM(String ram) {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^Select HDD \"([^\"]*)\"$")
    public void selectHDD(String hdd) {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^Select OS \"([^\"]*)\"$")
    public void selectOS(String os) {
        new BuildYourOwnComputerPage().selectOS(os);
    }

    @And("^Select Software \"([^\"]*)\"$")
    public void selectSoftware(String software) {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^Click on add to cart button$")
    public void clickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^Verify \"([^\"]*)\"$")
    public void verify(String expMess) {
        Assert.assertEquals("Product does not added to cart", expMess, new BuildYourOwnComputerPage().getProductAddedMessage());
    }
}
