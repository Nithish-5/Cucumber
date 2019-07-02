Feature: signup

Scenario Outline: test signup function with different set of nput

Given user opens signup page
When user enters fn as "<firstname>"
And user enters Ln as "<lastname>"
And user enters dop as "<dop>"
And user enters psd as "<password>"
And user enters confirm password as "<confirmpassword>"
Then click signup button
And Verify signup success message

Examples:
|firstname|lastname|dop|password|confirmpassword|
|saranya|shanmugam|13/2/2005|abc@123|abc@123|
|saranya1|shanmugam1|13/2/2005|abc@123|abc@123|