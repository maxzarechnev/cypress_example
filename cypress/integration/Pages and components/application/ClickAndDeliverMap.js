import GoogleMap from './GoogleMap';
import DeliveryMethodModal from './DeliveryMethodModal';
export default class ClickAndDeliverMap extends GoogleMap{
    DeliverHereButton = '.marker-popup>:nth-child(1)';
    getDeliverHereButton(){
        return this.DeliverHereButton;
    }
    ChooseDeliveringAddress(){
        const Delivery_modal = new DeliveryMethodModal();
        cy.get(Delivery_modal.getHomeDeliveryButton(),{timeout:15000}).click();
        cy.get(this.getSearchField(),{timeout:15000}).type('Casablanca, Maroc');
        cy.get(this.getSearchSelectorItem(1),{timeout:15000}).click();
        cy.get(this.getDeliverHereButton(),{timeout:15000}).click();
    }
}