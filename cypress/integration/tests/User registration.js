import LoginRegModal from '../Pages and components/application/LoginRegModal';
import faker from '../../../node_modules/faker';

describe('User registering tests', () => {
    const RegModal = new LoginRegModal();
    beforeEach(() => {
       // cy.log('Open the registration page in modal window')
        cy.viewport(1920, 1080);
        cy.visit(RegModal.getProjectUrl());
        cy.get(RegModal.getLoginModalButton()).click();
    });
    it('Restore the password', () => {
        //Restoring the password
        let PhoneNumber = RegModal.userPhoneNumber;
        cy.get(RegModal.getRestorePasswordLink(), {timeout: 15000}).click();
        cy.get(RegModal.getRestorePhoneField(), {timeout: 15000}).type(PhoneNumber);
        cy.get(RegModal.getConfirmRestoringButton(), {timeout: 15000}).click();
        cy.get(RegModal.getCodeField(0), {timeout:30000});
        //typing confirmation code
        RegModal.getConfirmationCode(PhoneNumber).then((code) => {
            let Confirmation_code = String(code).split('');
            Confirmation_code.forEach((element, i) => {
                cy.get(RegModal.getCodeField(i)).type(element);
            })
        });
        cy.get(RegModal.getConfirmCodeButton(), {timeout: 15000}).click();
        cy.get(RegModal.getNewPasswordField(), {timeout: 15000}).type('Password1!');
        cy.get(RegModal.getConfirmNewPasswordField(), {timeout: 15000}).type('Password1!');
        cy.get(RegModal.getConfirmCodeButton(), {timeout: 15000}).click();

    });
    it('Fields requirement check', () => {
        //empty fields check
        cy.get(RegModal.getRegistrationButton(), {timeout: 15000}).click();
        cy.get(RegModal.getCreateUserButton(), {timeout: 15000}).click();
        cy.get(':nth-child(1) > .error-message', {timeout: 15000}).should('exist');
        cy.get('.input-container > :nth-child(2) > .error-message').should('exist');
        cy.get(':nth-child(3) > .error-message').should('exist');
        cy.get(':nth-child(5) > .error-message').should('exist');
        cy.get(':nth-child(6) > .error-message').should('exist');
        cy.get('.agreements > :nth-child(2) > .error-message').should('exist');
    });

    it('Fields validation check', () => {
        //incorrect inputs checks
        let userLastName = faker.name.lastName(1);
        let userFirstName = faker.name.firstName(1);
        let phoneNumber = RegModal.RandomNumber(10000000000,99999999999);
        cy.get(RegModal.getRegistrationButton(), {timeout:15000}).click();
        cy.get(RegModal.getSurnameField(), {timeout:15000}).clear().type(userLastName);
        cy.get(RegModal.getNameField()).clear().type(userFirstName);
        cy.get(RegModal.getEmailField()).clear().type(userFirstName + '_' + userLastName);
        cy.get(RegModal.getRegistrationPhoneNumberField()).clear().type(phoneNumber);
        cy.get(RegModal.getRegistrationPasswordField()).clear().type('Password1');
        cy.get(RegModal.getAcceptConditionsSwitcher()).click();
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(':nth-child(3) > .error-message').should('exist');
        cy.get(':nth-child(6) > .error-message').should('exist');
        cy.get(RegModal.getEmailField(),{timeout:15000}).clear().type( '@' + userFirstName + '_' + userLastName);
        cy.get(RegModal.getRegistrationPasswordField()).clear().type('password1@');
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(':nth-child(3) > .error-message').should('exist');
        cy.get(':nth-child(6) > .error-message').should('exist');
        cy.get(RegModal.getEmailField(),{timeout:15000}).clear().type(userFirstName + '_' + userLastName + '@');
        cy.get(RegModal.getRegistrationPasswordField()).clear().type('PASSWORD1@');
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(':nth-child(3) > .error-message').should('exist');
        cy.get(':nth-child(6) > .error-message').should('exist');
        cy.get(RegModal.getEmailField(),{timeout:15000}).clear().type('@');
        cy.get(RegModal.getRegistrationPasswordField()).clear().type('Password@');
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(':nth-child(3) > .error-message').should('exist');
    });
    it('Entered data is not cleared when returning to the reg page from the confirmation code page', () => {
        let userLastName = faker.name.lastName(1);
        let userFirstName = faker.name.firstName(1);
        let phoneNumber = RegModal.RandomNumber(10000000000,99999999999);
        let password = '!Pas' + phoneNumber;
        //filling the registration form
        cy.get(RegModal.getRegistrationButton(), {timeout:15000}).click();
        cy.get(RegModal.getSurnameField(), {timeout:15000}).clear().type(userLastName);
        cy.get(RegModal.getNameField()).clear().type(userFirstName);
        cy.get(RegModal.getEmailField()).clear().type(userFirstName + '_' + userLastName + '@gmail.com');
        cy.get(RegModal.getRegistrationPhoneNumberField()).clear().type(phoneNumber);
        cy.get(RegModal.getRegistrationPasswordField()).clear().type(password);
        cy.get(RegModal.getAcceptConditionsSwitcher()).click();
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(RegModal.getCodeField(0), {timeout:30000});
        cy.get(RegModal.getBackButton()).click();
        cy.get(RegModal.getSurnameField(), {timeout:15000}).should('contain', userLastName);
        cy.get(RegModal.getNameField()).should('contain', userFirstName);
        cy.get(RegModal.getEmailField()).should('contain', userFirstName + '_' + userLastName + '@gmail.com')
        cy.get(RegModal.getRegistrationPhoneNumberField()).should('contain', phoneNumber);
    });
    it('Successful registering a new user', () => {
        let userLastName = faker.name.lastName(0);
        let userFirstName = faker.name.firstName(0);
        let phoneNumber = RegModal.RandomNumber(10000000000,99999999999);
        let password = '!Pas' + phoneNumber;
        //filling the registration form
        cy.get(RegModal.getRegistrationButton(), {timeout:15000}).click();
        cy.get(RegModal.getGenderSelector(), {timeout:15000}).click();
        cy.get(RegModal.getChooseGender(1), {timeout:15000}).click(); //changing gender to female
        cy.get(RegModal.getSurnameField(), {timeout:15000}).clear().type(userLastName);
        cy.get(RegModal.getNameField()).clear().type(userFirstName);
        cy.get(RegModal.getEmailField()).clear().type(userFirstName + '_' + userLastName + '@gmail.com');
        cy.get(RegModal.getRegistrationPhoneNumberField()).clear().type(phoneNumber);
        cy.get(RegModal.getRegistrationPasswordField()).clear().type(password);
        cy.get(RegModal.getAcceptConditionsSwitcher()).click();
        cy.get(RegModal.getCreateUserButton()).click();
        cy.get(RegModal.getCodeField(0), {timeout:30000});
        //getting the confirmation code
        RegModal.getConfirmationCode(phoneNumber).then((code) => {
            let Confirmation_code = String(code).split('');
            Confirmation_code.forEach((element, i) => {
                cy.get(RegModal.getCodeField(i)).type(element);
            })
        });
        cy.get(RegModal.getConfirmCodeButton()).click();
        cy.get(RegModal.getContinueButton(), {timeout:60000}).should("exist");
        cy.get(RegModal.getContinueButton()).click();
    });


});