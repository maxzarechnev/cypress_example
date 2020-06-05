import CartModal from '../Pages and components/application/CartModal';
import Header from '../Pages and components/application/Header';
import ProductListPage from '../Pages and components/application/ProductListPage';
import LoginRegModal from "../Pages and components/application/LoginRegModal";
import MyAccountPage from "../Pages and components/application/MyAccountPage";
import CheckoutPage from "../Pages and components/application/CheckoutPage";

describe('Cart tests', () => {
    const Cart = new CartModal();
    const ProductList = new ProductListPage();
    const Head = new Header();
    const RegModal = new LoginRegModal();
    const MyAccount = new MyAccountPage();
    const Checkout = new CheckoutPage();
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit(Cart.getProjectUrl());
    });
    it ('User basket is replaced with the one he had when logged in', () => {
        //need to fill with choosing the delivery method
        let productsAmount = 3;
        cy.visit(ProductList.getProductListUrl());
        ProductList.buyProducts(productsAmount);
        RegModal.logIn(RegModal.userPhoneNumber, RegModal.userPassword);
        cy.get(Cart.getCartItemsAmount(),{timeout:30000});
        cy.get(Head.getCartButton(),{timeout:30000}).click();
        cy.get(Cart.getCartItemsAmount(),{timeout:60000}).invoke('text')
            .then((text) => {
                //probably need waiting for proper calculation
                assert.equal(text, String(productsAmount),'amount of products in the cart corresponds to the amount of added products');
            });
        cy.get(RegModal.getLoginModalButton(),{timeout:15000}).click();
        MyAccount.DisconnectUser();

        //repeat the scenario to ensure old basket will be replaced with the new one
        productsAmount = 5;
        cy.visit(ProductList.getProductListUrl());
        ProductList.buyProducts(productsAmount);
        RegModal.logIn(RegModal.userPhoneNumber, RegModal.userPassword);
        cy.get(Cart.getCartItemsAmount(),{timeout:30000});
        cy.get(Head.getCartButton(),{timeout:30000}).click();
        cy.get(Cart.getCartItemsAmount(),{timeout:60000}).invoke('text')
            .then((text) => {
                //key assertion of the test
                assert.equal(text, String(productsAmount),'MAIN ASSERTION IN THE TEST: amount of products in the cart corresponds to the amount of added products');
            });
        cy.get(Cart.getProceedToCheckoutButton(),{timeout:30000}).click();
        Checkout.finishOrder();
        Checkout.orderCheck();
        cy.get(Checkout.getContinueShoppingButton()).click();
    });
    it ('User basket is replaced with the one he had when logged in', () => {
        //need to fill with choosing the delivery method
        let productsAmount = 3;
        cy.visit(ProductList.getProductListUrl());
        ProductList.buyProducts(productsAmount);
        RegModal.logIn(RegModal.userPhoneNumber, RegModal.userPassword);
        cy.get(Cart.getCartItemsAmount(),{timeout:30000});
        cy.get(Head.getCartButton(),{timeout:30000}).click();
        cy.get(Cart.getCartItemsAmount(),{timeout:60000}).invoke('text')
            .then((text) => {
                //probably need waiting for proper calculation
                assert.equal(text, String(productsAmount),'amount of products in the cart corresponds to the amount of added products');
            });

        cy.get(RegModal.getLoginModalButton(),{timeout:15000}).click();
        MyAccount.DisconnectUser();

        //repeat the scenario to ensure old basket will be replaced with the new one
        RegModal.logIn(RegModal.userPhoneNumber, RegModal.userPassword);
        productsAmount = 5;
        cy.visit(ProductList.getProductListUrl());
        ProductList.buyProducts(productsAmount);
        productsAmount += 5; //now total product amount should be 8 for checking in the basket
        cy.get(Cart.getCartItemsAmount(),{timeout:30000});
        cy.get(Head.getCartButton(),{timeout:30000}).click();
        cy.get(Cart.getCartItemsAmount(),{timeout:60000}).invoke('text')
            .then((text) => {
                //key assertion of the test
                assert.equal(text, String(productsAmount),'MAIN ASSERTION IN THE TEST: amount of products in the cart corresponds to the amount of added products');
            });
        cy.get(Cart.getProceedToCheckoutButton(),{timeout:30000}).click();
        Checkout.finishOrder();
        Checkout.orderCheck();
        cy.get(Checkout.getContinueShoppingButton()).click();
    });
});