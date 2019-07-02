package stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Signup {
	@Given("user opens signup page")
	public void user_opens_signup_page() {
	    System.out.println(" opened ");
	}

	@When("user enters fn as {string}")
	public void user_enters_fn_as(String fn) {
		System.out.println(" fn entered " +fn);
	}

	@When("user enters Ln as {string}")
	public void user_enters_Ln_as(String ln) {
		System.out.println(" ln entered " +ln);
	}

	@When("user enters dop as {string}")
	public void user_enters_dop_as(String dop) {
		System.out.println(" dop entered " +dop);
	}

	@When("user enters psd as {string}")
	public void user_enters_psd_as(String psd) {
		System.out.println(" psd entered " +psd);
	}

	@When("user enters confirm password as {string}")
	public void user_enters_confirm_password_as(String confirmpassword) {
		System.out.println(" psd matched " +confirmpassword);
	}

	@Then("click signup button")
	public void click_signup_button() {
		System.out.println(" sign button clicked ");
	}

	@Then("Verify signup success message")
	public void verify_signup_success_message() {
		System.out.println(" verified ");
	}


}
