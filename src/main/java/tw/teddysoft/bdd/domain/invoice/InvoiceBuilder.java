package tw.teddysoft.bdd.domain.invoice;

/**
 * Created by teddy on 2017/3/9.
 */
public class InvoiceBuilder {

    private double vatRate = 0.0;
    private int taxIncludedPrice = 0;
   private  int taxExcludedPrice=0;
    private InvoiceBuilder(){}

    public boolean flag;

    public static InvoiceBuilder newInstance(){
        return new InvoiceBuilder();
    }

    public InvoiceBuilder withVatRate(double vatRate) {
        this.vatRate = vatRate;
        return this;
    }

    public InvoiceBuilder withTaxIncludedPrice(int taxIncludedPrice) {
        flag = true;
        this.taxIncludedPrice = taxIncludedPrice;
        return this;
    }

    public Invoice issue() {
        if(taxIncludedPrice==0 && taxExcludedPrice!=0) {
            taxIncludedPrice =(int) Math.round(taxExcludedPrice * (1 + vatRate));
        }
        if(flag == false){
            return new Invoice(InvoiceCalculator.getTaxIncludedPrice(taxExcludedPrice,vatRate),
                    vatRate,taxExcludedPrice,
                    InvoiceCalculator.getVAT(taxExcludedPrice,vatRate));
        }
        else{
            return new Invoice(taxIncludedPrice, vatRate,
                    InvoiceCalculator.getTaxExcludedPrice(taxIncludedPrice, vatRate)
                    , InvoiceCalculator.getVAT(taxIncludedPrice, vatRate));
        }

    }

    public InvoiceBuilder withTaxExcludedPrice(Integer arg1) {
        flag = false;
        this.taxExcludedPrice=arg1;
        return this;
    }
}
