package tw.teddysoft.bdd.domain.invoice;

/**
 * Created by teddy on 2017/3/2.
 */
public class Invoice {
    private final int taxExcludedPrice;
    private final double vatRate;
    private final int taxIncludedPrice;
    private final int vat;

    public Invoice(int taxIncludedPrice, double vatRate, int taxExcludedPrice, int vat) {
        this.taxIncludedPrice = taxIncludedPrice;
        this.vatRate = vatRate;
        this.taxExcludedPrice = taxExcludedPrice;
        this.vat = vat;
    }

    public int getTaxIncludedPrice() {
        return taxIncludedPrice;
    }

    public int getVAT(){return this.vat; }

    public double getVatRate() {
        return vatRate;
    }

    public int getTaxExcludedPrice()
    {
        return this.taxExcludedPrice;
    }
}
