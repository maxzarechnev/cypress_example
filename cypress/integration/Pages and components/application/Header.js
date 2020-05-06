import HomePage from './HomePage';
export default class Header extends HomePage{
    getLoginModalButton() {
        return `.create-account-link.b-auth-btn`;
    }
    getCartButton(){
        return '.btn-mini-cart';
    }
    getCartItemsAmount(){
        return '.qty.empty';
    }
}
