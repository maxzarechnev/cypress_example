export default class MainPage {
    StageProjectUrl = 'https://stage-wynd-marjane-magento.noveogroup.com';
    StageApiUrl = 'https://marjane-api.westeurope.stage.mutu.wyndiscover.com';
    QAProjectUrl = 'https://qa-wynd-marjane-magento.noveogroup.com';
    QAApiUrl = 'https://marjane-api.westeurope.qa.mutu.wyndiscover.com';

    getProjectUrl() {
       return this.StageProjectUrl;
    }
    getApiUrl() {
        return this.StageApiUrl;
    }

    RandomNumber(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    apiAuth() {
        return new Cypress.Promise((resolve, reject) => {
            cy.request('POST', this.getApiUrl() + '/api/authenticate',{
                "username": "admin_api",
                "password": "GChphf5rAR7L",
                "context": "api"
            }).then((response) => {
                expect(response.status).to.eq(200);
                let token = response.body.token;
                resolve(token);
            });
        })
    }
}
