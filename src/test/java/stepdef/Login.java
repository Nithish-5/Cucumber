package stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	@Given("user opens login page in newtours application")
	public void user_opens_login_page_in_newtours_application() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("user opens newtours login application");
	}

	@When("user enters username as mercury and password as mercury")
	public void user_enters_username_as_mercury_and_password_as_mercury() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("username and password is entered");

	}

	@When("click on Submit button")
	public void click_on_Submit_button() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("clicked on submit");

	}

	@Then("verify login success")
	public void verify_login_success() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("login result is verified");
	}


}
