package step;

import cucumber.api.java8.En;
import tw.teddysoft.bdd.domain.invoice.Invoice;
import tw.teddysoft.bdd.domain.invoice.InvoiceBuilder;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by teddy on 2017/3/2.
 */
public class IssuingInvoiceStep implements En {
    InvoiceBuilder builder;
    Invoice invoice;
    boolean flag = false;

    public IssuingInvoiceStep() {

        Given("^Ｔhe VAT rate is (\\d+\\.\\d+)$", (Double arg1) -> {
            builder = InvoiceBuilder.newInstance();
            builder.withVatRate(arg1);
        });

        Given("^the tax included price provided is (\\d+)$", (Integer arg1) -> {
            if(flag == false)
                flag = true;
            builder.withTaxIncludedPrice((int)arg1);
        });

        When("^I issue a company invoice$", () -> {
            invoice = builder.issue();
        });

        Then("^I should see the VAT is (\\d+)$", (Integer arg1) -> {

            assertThat(invoice.getVAT(), is (arg1));
        });


        Then("^the tax excluded price is (\\d+)$", (Integer arg1) -> {
            assertThat(invoice.getTaxExcludedPrice(), is (arg1));
        });

        Given("^the tax excluded price provided is (\\d+)$", (Integer arg1) -> {
            if(flag == true)
                flag = false;
            builder.withTaxExcludedPrice(arg1);
        });

        Then("^the tax included price is (\\d+)$", (Integer arg1) -> {
            assertThat(invoice.getTaxIncludedPrice(), is (arg1));
        });
    }
}
