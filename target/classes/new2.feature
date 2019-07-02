Feature: Test Login

Scenario: Login with valid
Given open newtours app
When user enters un as "mercury" and psd as "mercury"
And submit login form
Then verify pass


Scenario: Login with invalid
Given open newtours app
When user enters un as "saranya" and psd as "saranya"
And submit login form
Then verify failure