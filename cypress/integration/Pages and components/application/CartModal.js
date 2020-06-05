import Header from './Header';
export default class CartModal extends Header{
    ProceedToCheckoutButton = '.btn-blue';
    ChangeDeliveryMethodButton = '.delivery-method > button';
    CloseCartModalButton = '.close-wrapper';
    getProceedToCheckoutButton(){
        return this.ProceedToCheckoutButton;
    }
    getCloseCartModalButton()
    {
        return this.CloseCartModalButton;
    }
    increaseProductAmount(productIndex, Amount)
    {
        //Increase the amount of "productIndex" product by "Amount"
        for (let ProductValue = 1; ProductValue <= Amount; ProductValue += 1){
            cy.get(':nth-child(' + productIndex +') > .list-of-selected-products__product-info > .list-of-selected-products__product-info-settings > .list-of-selected-products__product-info-quantity > .add',{timeout:15000}).click();
        }
    }
    decreaseProductAmount(productIndex, Amount)
    {
        //Decrease the amount of "productIndex" product by "Amount"
        for (let ProductValue = 1; ProductValue <= Amount; ProductValue += 1){
            cy.get(':nth-child(' + productIndex +') > .list-of-selected-products__product-info > .list-of-selected-products__product-info-settings > .list-of-selected-products__product-info-quantity > .remove',{timeout:15000}).click();
        }
    }
    removeProduct(productIndex)
    {
        //remove the "productIndex" product from the cart
            cy.get(':nth-child(' + productIndex +') > .list-of-selected-products__product-info > .list-of-selected-products__product-info-title > button',{timeout:15000}).click();
    }
    getChangeDeliveryMethodButton()
    {
        return this.ChangeDeliveryMethodButton;
    }
    changeOrderByApi(uuid){
        cy.request('PUT', this.getApiUrl() + '/api/authenticate',{
            "username": "admin_api",
            "password": "GChphf5rAR7L",
            "context": "api"
        })
    }
}
