import GoogleMap from './GoogleMap';
import DeliveryMethodModal from './DeliveryMethodModal';
export default class ClickAndCollectMap extends GoogleMap{
    ChooseStoreButton = '.shops-list > :nth-child(2) > button';
    getChooseStoreButton(){
        return this.ChooseStoreButton;
    }
    ChooseStore(){
        const Delivery_modal = new DeliveryMethodModal();
        cy.get(Delivery_modal.getStoreDeliveryButton(),{timeout:15000}).click();
        cy.get(this.getChooseStoreButton(),{timeout:15000}).click();
    }
}
