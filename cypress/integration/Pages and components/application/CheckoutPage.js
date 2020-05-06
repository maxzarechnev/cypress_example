export default class CheckoutPage {
    ProceedToStep2Button = '.total-price>:nth-child(2)';
    ProceedToStep3Button = '.total-price>:nth-child(2)';
    ContinueShoppingButton = '.button > a';
    getProceedToStep2Button(){
        return this.ProceedToStep2Button;
    }
    getProceedToStep3Button(){
        return this.ProceedToStep3Button;
    }
    getContinueShoppingButton(){
        return this.ContinueShoppingButton;
    }
}