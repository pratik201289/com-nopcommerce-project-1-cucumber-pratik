$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a user I want to add a product in cart successfully",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6029013300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate computer page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 138546800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 1056489200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verifyText(String)"
});
formatter.result({
  "duration": 89120900,
  "status": "passed"
});
formatter.after({
  "duration": 877494300,
  "status": "passed"
});
formatter.before({
  "duration": 5037463000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate desktop page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Desktops\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 57300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 1741599100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 820833100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 139581000,
  "status": "passed"
});
formatter.after({
  "duration": 838302600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3735962100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 201100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 1168197100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 568478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.clickOnProductName(String)"
});
formatter.result({
  "duration": 1267896500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.selectProcessor(String)"
});
formatter.result({
  "duration": 222306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectRAM(String)"
});
formatter.result({
  "duration": 236695300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectHDD(String)"
});
formatter.result({
  "duration": 149566900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.selectOS(String)"
});
formatter.result({
  "duration": 152378000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.selectSoftware(String)"
});
formatter.result({
  "duration": 125979600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 130173900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 757843800,
  "status": "passed"
});
formatter.after({
  "duration": 850252600,
  "status": "passed"
});
formatter.before({
  "duration": 3541113200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 752733900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 549065100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.clickOnProductName(String)"
});
formatter.result({
  "duration": 1202693900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.selectProcessor(String)"
});
formatter.result({
  "duration": 129210100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectRAM(String)"
});
formatter.result({
  "duration": 178735000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectHDD(String)"
});
formatter.result({
  "duration": 155887200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.selectOS(String)"
});
formatter.result({
  "duration": 155420700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.selectSoftware(String)"
});
formatter.result({
  "duration": 185419400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 99058200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 743883500,
  "status": "passed"
});
formatter.after({
  "duration": 959939700,
  "status": "passed"
});
formatter.before({
  "duration": 3099586800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should build own computer and add in cart successfully",
  "description": "",
  "id": "computer-test;user-should-build-own-computer-and-add-in-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnComputerTab()"
});
formatter.result({
  "duration": 1097664800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnDesktopLink()"
});
formatter.result({
  "duration": 1014891700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.clickOnProductName(String)"
});
formatter.result({
  "duration": 1510723300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.selectProcessor(String)"
});
formatter.result({
  "duration": 127539900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectRAM(String)"
});
formatter.result({
  "duration": 178648600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.selectHDD(String)"
});
formatter.result({
  "duration": 127541500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.selectOS(String)"
});
formatter.result({
  "duration": 140711700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.selectSoftware(String)"
});
formatter.result({
  "duration": 187465700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 121525600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 273065900,
  "status": "passed"
});
formatter.after({
  "duration": 861105000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3385704100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should able to see the message \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 562602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 34
    }
  ],
  "location": "LoginSteps.iShouldAbleToSeeTheMessage(String)"
});
formatter.result({
  "duration": 63617200,
  "status": "passed"
});
formatter.after({
  "duration": 986903700,
  "status": "passed"
});
formatter.before({
  "duration": 3405755200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the error message with inValid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abc100@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc100\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "CLick on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 976697500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc100@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 168983700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc100",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 158784000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 853528400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 97024200,
  "status": "passed"
});
formatter.after({
  "duration": 878002600,
  "status": "passed"
});
formatter.before({
  "duration": 2988219800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should login with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"jvyas@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"jaiminivyas\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "CLick on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify logout link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 619249700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jvyas@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 166688200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jaiminivyas",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 159257000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 708501100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogoutLinkIsDisplayed()"
});
formatter.result({
  "duration": 100757600,
  "status": "passed"
});
formatter.after({
  "duration": 856345500,
  "status": "passed"
});
formatter.before({
  "duration": 2998265700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should logout successfully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter email \"jvyas@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter password \"jaiminivyas\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "CLick on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify login link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 972802900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jvyas@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 149634700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jaiminivyas",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 151102800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 730265100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLogoutLink()"
});
formatter.result({
  "duration": 710923900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginLinkIsDisplayed()"
});
formatter.result({
  "duration": 82533600,
  "status": "passed"
});
formatter.after({
  "duration": 882810300,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I want to register in to nop commerce successfully",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3379275300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate register page successfully",
  "description": "",
  "id": "register-test;user-should-navigate-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should able to see \"Register\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 878809300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iShouldAbleToSeeText(String)"
});
formatter.result({
  "duration": 45092300,
  "status": "passed"
});
formatter.after({
  "duration": 790963300,
  "status": "passed"
});
formatter.before({
  "duration": 2542951500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify first name last name email password confirm password field are mandatory",
  "description": "",
  "id": "register-test;verify-first-name-last-name-email-password-confirm-password-field-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the first error message \"First name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the second error message \"Last name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the third error message \"Email is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the fourth error message \"Password is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the sixth error message \"Password is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 868233000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 83127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.verifyTheFirstErrorMessage(String)"
});
formatter.result({
  "duration": 52486300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 33
    }
  ],
  "location": "RegisterSteps.verifyTheSecondErrorMessage(String)"
});
formatter.result({
  "duration": 50692500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.verifyTheThirdErrorMessage(String)"
});
formatter.result({
  "duration": 66181400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 33
    }
  ],
  "location": "RegisterSteps.verifyTheFourthErrorMessage(String)"
});
formatter.result({
  "duration": 73631400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.verifyTheSixthErrorMessage(String)"
});
formatter.result({
  "duration": 81811000,
  "status": "passed"
});
formatter.after({
  "duration": 744816400,
  "status": "passed"
});
formatter.before({
  "duration": 2050341000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Select gender",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter first name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter last name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select day month and year",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter email",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 544001100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.selectGender()"
});
formatter.result({
  "duration": 68860200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterFirstName()"
});
formatter.result({
  "duration": 82680900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterLastName()"
});
formatter.result({
  "duration": 82961900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.selectDayMonthAndYear()"
});
formatter.result({
  "duration": 269643700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterEmail()"
});
formatter.result({
  "duration": 82061100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterPassword()"
});
formatter.result({
  "duration": 85688500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enterConfirmPassword()"
});
formatter.result({
  "duration": 78350900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 542284600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 37883200,
  "status": "passed"
});
formatter.after({
  "duration": 752474500,
  "status": "passed"
});
});