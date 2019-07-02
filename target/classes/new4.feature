Feature: Test Background keyword

Background: display welcome
Given

Scenario: signin
Given users un and psd
And click signin

Scenario: search for the product
When user searches for iphone

Scenario: add to cart
When user adding the searched product to cart

Scenario: payment process
When user performing payment process using netbanking

Scenario: signout
When user performing logout from online shopping cart