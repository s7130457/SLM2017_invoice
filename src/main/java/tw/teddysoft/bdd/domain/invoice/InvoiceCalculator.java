package tw.teddysoft.bdd.domain.invoice;

/**
 * Created by teddy on 2017/3/9.
 */
public class InvoiceCalculator {
    static boolean flag = true;
    public static int getVAT(int price,double vatRate) {
        if(flag == true)
            return price - getTaxExcludedPrice(price,vatRate);
        else
            return  (int) Math.round(price * vatRate);
    }

    public static int getTaxExcludedPrice(int taxIncludedPrice,double vatRate) {
        flag = true;
        return (int) Math.round(taxIncludedPrice / (1 + vatRate));
    }

    public static int getTaxIncludedPrice(int taxExcludedPrice,double vatRate){
        flag = false;
        return (int) Math.round(taxExcludedPrice + taxExcludedPrice*vatRate);
    }
}
