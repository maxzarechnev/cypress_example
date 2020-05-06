import Header from './Header';
export default class CartModal extends Header{
    ProceedToCheckoutButton = '.btn-blue';

    getProceedToCheckoutButton(){
        return this.ProceedToCheckoutButton;
    }
}