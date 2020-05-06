import HomePage from "./HomePage";
export default class ProductListPage{

    ProductListUrl = '/les-eaux/eaux-plates.html';
    getBuyButton(value) {
        return ':nth-child(' + value +') > .product-item-info > .details > .product-item-inner > .product > .actions-primary > .react-product-button > .add-to-cart > .add-to-cart__button';
    }
    getProductListUrl(){
        const HP = new HomePage();
        return HP.getProjectUrl() + this.ProductListUrl;
    }
    buyProducts(quantity){
        for (let ProductValue = 1; ProductValue <= quantity; ProductValue += 1)
        {
            cy.get(this.getBuyButton(ProductValue)).click();
        }
    }
}