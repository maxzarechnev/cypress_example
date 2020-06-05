import MainPage from './MainPage';
export default class Header extends MainPage{
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
