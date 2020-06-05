import GoogleMap from './GoogleMap';
import DeliveryMethodModal from './DeliveryMethodModal';
export default class ClickAndCollectMap extends GoogleMap{
    ChooseStoreButton = '.shops-list > :nth-child(1) > button';
    SearchField = '#searchInput';

    getChooseStoreButton(){
        return this.ChooseStoreButton;
    }
    getSearchField(){
        return this.SearchField;
    }
    ChooseStore(){
        const Delivery_modal = new DeliveryMethodModal();
        cy.get(Delivery_modal.getStoreDeliveryButton(),{timeout:15000}).click();
        cy.get(this.getChooseStoreButton(),{timeout:15000}).click();
    }
}
