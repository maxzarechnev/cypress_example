import MainPage from "./MainPage";
export default class ProductListPage{

    ProductListUrl = '/les-eaux/eaux-plates.html';
    getBuyButton(value) {
        return ':nth-child(' + value +') > .product-item-info > .details > .product-item-inner > .product > .actions-primary > .react-product-button > .add-to-cart > .add-to-cart__button';
    }
    getProductListUrl(){
        const MP = new MainPage();
        return MP.getProjectUrl() + this.ProductListUrl;
    }
    buyProducts(quantity){
        for (let lists = 0; lists <= Math.trunc(quantity/12); lists += 1){
            for (let ProductValue = 1 + 12 * lists; ProductValue <= Math.min(quantity, 12 + lists * 12); ProductValue += 1)
            {
                cy.get(this.getBuyButton(ProductValue),{timeout:30000}).click();
            }
            if (lists !== Math.trunc(quantity/12)) {
                //cy.get(expandProductListButton).click();   to be added when the needed button will be added
            }
        }
    }
}