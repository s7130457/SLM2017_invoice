package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created by teddy on 2017/3/16.
 */
public class InvoiceCalculatorTest {

    //TODO: Rename the test case to reveal its intent
    @Test
    public void testTaxIncludedPriceEqual_10VatEqual_0(){
        assertEquals(0,InvoiceCalculator.getVAT(10,0.05));
    }

}
