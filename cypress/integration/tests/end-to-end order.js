import DeliveryMethodModal from '../Pages and components/application/DeliveryMethodModal';
import faker from '../../../node_modules/faker';
import HomePage from '../Pages and components/application/HomePage';
import ClickAndDeliverMap from '../Pages and components/application/ClickAndDeliverMap';
import ClickAndCollectMap from '../Pages and components/application/ClickAndCollectMap';
import LoginRegModal from '../Pages and components/application/LoginRegModal';
import ProductListPage from '../Pages and components/application/ProductListPage';
import Header from '../Pages and components/application/Header';
import CartModal from '../Pages and components/application/CartModal';
import CheckoutPage from '../Pages and components/application/CheckoutPage';

describe('C&D & C&C tests', () => {
    const Delivery_modal = new DeliveryMethodModal();
    const HP = new HomePage();
    const ClickDeliverMap = new ClickAndDeliverMap();
    const RegModal = new LoginRegModal();
    const ProductList = new ProductListPage();
    const Head = new Header();
    const Cart = new CartModal();
    const Checkout = new CheckoutPage();
    const ClickCollectMap = new ClickAndCollectMap();
    function buyProducts(){
        //Can't view because of NDA
    }
    beforeEach(() => {
        // cy.log('Open the Delivery method modal window')
        cy.viewport(1920, 1080);
        cy.visit(HP.getProjectUrl());
        cy.get(Delivery_modal.getModifyButton(),{timeout:15000}).click();
    });
    //Create a click&delivery order
    it('C&D test', () => {
        ClickDeliverMap.ChooseDeliveringAddress();
        buyProducts();
    });
    //Create a click&collect order
    it('C&C test', () => {
        ClickCollectMap.ChooseStore();
        buyProducts();
    })
});