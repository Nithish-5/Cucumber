package stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Logincheck {
	@Given("open newtours app")
	public void open_newtours_app() {
	    System.out.println("newtours app opened");
	}

	@When("user enters un as {string} and psd as {string}")
	public void user_enters_un_as_and_psd_as(String string, String string2) {
		System.out.println("un and psd entered");
	}

	@When("submit login form")
	public void submit_login_form() {
		System.out.println("clicked submit");
	}

	@Then("verify pass")
	public void verify_pass() {
		System.out.println("verified");
	}

	@Then("verify failure")
	public void verify_failure() {
		System.out.println("failured");
	}
}
