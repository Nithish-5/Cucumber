package stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Testbackground {
	@Given("users un and psd")
	public void users_un_and_psd() {
	    System.out.println("user entered");
	}

	@Given("click signin")
	public void click_signin() {
		 System.out.println("clicked signin");
	}

	@When("user searches for iphone")
	public void user_searches_for_iphone() {
		 System.out.println("iphone found");
	}

	@When("user adding the searched product to cart")
	public void user_adding_the_searched_product_to_cart() {
		 System.out.println("product added");
	}

	@When("user performing payment process using netbanking")
	public void user_performing_payment_process_using_netbanking() {
		 System.out.println("payment processed");
	}

	@When("user performing logout from online shopping cart")
	public void user_performing_logout_from_online_shopping_cart() {
		 System.out.println("logout");
	}

}
