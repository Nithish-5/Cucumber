$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/new3.feature");
formatter.feature({
  "name": "signup",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "test signup function with different set of nput",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens signup page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters fn as \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters Ln as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters dop as \"\u003cdop\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters psd as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters confirm password as \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click signup button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify signup success message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "dop",
        "password",
        "confirmpassword"
      ]
    },
    {
      "cells": [
        "saranya",
        "shanmugam",
        "13/2/2005",
        "abc@123",
        "abc@123"
      ]
    },
    {
      "cells": [
        "saranya1",
        "shanmugam1",
        "13/2/2005",
        "abc@123",
        "abc@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test signup function with different set of nput",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens signup page",
  "keyword": "Given "
});
formatter.match({
  "location": "Signup.user_opens_signup_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters fn as \"saranya\"",
  "keyword": "When "
});
formatter.match({
  "location": "Signup.user_enters_fn_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Ln as \"shanmugam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_Ln_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters dop as \"13/2/2005\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_dop_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters psd as \"abc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_psd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters confirm password as \"abc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_confirm_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.click_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify signup success message",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.verify_signup_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test signup function with different set of nput",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens signup page",
  "keyword": "Given "
});
formatter.match({
  "location": "Signup.user_opens_signup_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters fn as \"saranya1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Signup.user_enters_fn_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Ln as \"shanmugam1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_Ln_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters dop as \"13/2/2005\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_dop_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters psd as \"abc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_psd_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters confirm password as \"abc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.user_enters_confirm_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.click_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify signup success message",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.verify_signup_success_message()"
});
formatter.result({
  "status": "passed"
});
});