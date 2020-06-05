import MainPage from "./MainPage";

export default class CheckoutPage extends MainPage{
    ProceedToStep2Button = '.total-price>:nth-child(2)';
    ProceedToStep3Button = '.total-price>:nth-child(2)';
    ContinueShoppingButton = '.button > a';
    getProceedToStep2Button(){
        return this.ProceedToStep2Button;
    }
    getProceedToStep3Button(){
        return this.ProceedToStep3Button;
    }
    getContinueShoppingButton(){
        return this.ContinueShoppingButton;
    }
    finishOrder(){
        cy.get(this.getProceedToStep2Button(),{timeout:15000}).click();
        cy.get(this.getProceedToStep3Button(),{timeout:15000}).click();
    }
    orderCheck(){
        this.apiAuth().then((token) => {
            cy.get('.success-order>:nth-child(3) >:nth-child(1)', {timeout: 15000}).invoke('text') //invoking order reference id from the frontend
                .then((text) => {
                    let OrderReference = text.trim().slice(1);  //slicing, because its view is #Reference on the Front End

                    //searching for the order UUID in order list.
                    // We can't retrieve the needed info for the test from the order list, that's why we need to call order itself later

                    cy.request({
                        method: 'GET',
                        url: this.getApiUrl() + "/api/documents/order?reference=" + OrderReference,
                        headers:
                            {
                                Authorization: 'Bearer ' + token
                            }
                    }).then((response) => {
                        let OrderUuid = response.body[0].uuid;

                        //request for getting the info we couldn't retrieve from the order list

                        cy.request({
                            method: 'GET',
                            url: this.getApiUrl() + "/api/documents/order/" + OrderUuid,
                            headers:
                                {
                                    Authorization: 'Bearer ' + token
                                }
                        }).then((response) => {
                            assert.equal(response.body.destination.code, 'CLICK_AND_DELIVER', 'Method is C&D');
                            console.log(response.body.fees[0].enabled);
                            assert.equal(response.body.fees[0].enabled, true, 'Preparation fee is included');
                            console.log(response.body.fees[1].enabled);
                            assert.equal(response.body.fees[1].enabled, true, 'Delivery fee is included');
                        });
                    });
                });
        });
    }

}