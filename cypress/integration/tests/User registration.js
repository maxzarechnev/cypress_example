import LoginRegModal from '../Pages and components/application/LoginRegModal';
import faker from '../../../node_modules/faker';

describe('User registering tests', () => {
    const RegModal = new LoginRegModal();
    beforeEach(() => {
       // cy.log('Open the registration page in modal window')
        cy.visit(RegModal.getProjectUrl());
        cy.get(RegModal.getLoginModalButton()).click();
        cy.get(RegModal.getRegistrationButton()).click();
    });

    it('Registering new user', () => {
        let userLastName = faker.name.lastName(1);
        let userFirstName = faker.name.firstName(1);
        let phoneNumber = RegModal.RandomPhoneNumber(10000000000,99999999999);
        let password = '!Pas' + phoneNumber;
        //filling the registration form
        cy.get(RegModal.getSurnameField(), {timeout:15000}).clear().type(userLastName);
        cy.get(RegModal.getNameField()).clear().type(userFirstName);
        cy.get(RegModal.getEmailField()).clear().type(userFirstName + '_' + userLastName + '@gmail.com');
        cy.get(RegModal.getRegistrationPhoneNumberField()).clear().type(phoneNumber);
        cy.get(RegModal.getRegistrationPasswordField()).clear().type(password);
        cy.get(RegModal.getAcceptConditionsSwitcher()).click();
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(RegModal.getCodeField(0), {timeout:30000});
        //getting the confirmation code
        function getConfirmationCode() {
            return new Cypress.Promise((resolve, reject) => {
                cy.request(RegModal.getApiUrl() + '/api/mobile/v1/auth/sms_code/' + phoneNumber)
                    .then((response) => {
                        expect(response.status).to.eq(200);
                        let code = response.body.code;
                        resolve(code);
                    });
                })
            }
            //typing confirmation code
        getConfirmationCode().then((code) => {
            let Confirmation_code = String(code).split('');
            Confirmation_code.forEach((element, i) => {
                cy.get(RegModal.getCodeField(i)).type(element);
            })
        });
        cy.get(RegModal.getConfirmCodeButton()).click();
        cy.get(RegModal.getContinueButton(), {timeout:15000}).should("exist");
        cy.get(RegModal.getContinueButton()).click();
    });


});