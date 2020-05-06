export default class DeliveryMethodModal {
    ModifyButton = '#showDeliveryTypes';
    HomeDeliveryButton = '.delivery-method__types > :nth-child(2)';
    StoreDeliveryButton = '.delivery-method__types > :nth-child(3)';

    getModifyButton() {
        return this.ModifyButton;
    }
    getHomeDeliveryButton() {
        return this.HomeDeliveryButton;
    }
    getStoreDeliveryButton() {
        return this.StoreDeliveryButton;
    }

}