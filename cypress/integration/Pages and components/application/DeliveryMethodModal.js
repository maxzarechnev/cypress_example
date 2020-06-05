export default class DeliveryMethodModal {
    ModifyButton = '#showDeliveryTypes';
    HomeDeliveryButton = '#delivery-types-select > :nth-child(1)';
    StoreDeliveryButton = '#delivery-types-select > :nth-child(2)';

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