import Header from './Header';
export default class LoginRegModal extends Header{
    userPhoneNumber = '789654789654';
    userPassword = 'Password1!';
    getLoginPhoneNumberField() {
        return `.user[name="phone"]`;
    }
    getLoginPasswordField() {
        return `.password[name="password"]`;
    }
    getConnectButton() {
        return `.btn-blue[type="submit"]`;
    }
    getRegistrationButton() {
        return `.btn-white[type="button"]`;
    }
    getRestorePasswordLink() {
        return '.link-wrapper > a';
    }
    getRestorePhoneField(){
        return '.user';
    }
    getConfirmRestoringButton(){
        return 'form > .btn-blue';
    }
    getNewPasswordField(){
        return ':nth-child(1) > .password';
    }
    getConfirmNewPasswordField(){
        return ':nth-child(2) > .password';
    }
    getGenderSelector() {
        return `.create-account > :nth-child(1) > .custom-select-container > .custom-select__control > .custom-select__value-container`;
    }
    getChooseGender(gender){
        return '.custom-select__menu > :nth-child(' + gender + ')';
    }
    getSurnameField() {
        return `.input-container > :nth-child(1) > input`;
    }
    getNameField() {
        return `.input-container > :nth-child(2) > input`;
    }
    getEmailField() {
        return `.create-account > :nth-child(3) > input`;
    }
    getRegionSelector() {
        return `.select-container > :nth-child(1) > .custom-select-container > .custom-select__control > .custom-select__value-container > .custom-select__single-value`;
    }
    getCitySelector() {
        return `:nth-child(2) > .custom-select-container > .custom-select__control > .custom-select__value-container > .custom-select__single-value`;
    }
    getRegistrationPhoneNumberField() {
        return `:nth-child(5) > .icon`;
    }
    getRegistrationPasswordField() {
        return `:nth-child(6) > .icon`;
    }
    getAcceptConditionsSwitcher() {
        return `:nth-child(2) > .switch > .slider`;
    }
    getBackButton() {
        return `.back`;
    }
    getCloseButton() {
        return `.App > #r-modal > .modal-content > .modal-header > .close-wrapper`;
    }
    getCreateUserButton() {
        return `.create-account > .btn-blue`;
    }
    getConfirmCodeButton() {
        return `.btn-yellow`;
    }
    getCodeField(number)
    {
        return '.recovery-password > form > :nth-child(1) > :nth-child(' + (number + 1) + ')';
    }
    getContinueButton(){
        return '.create-account-success > .btn-blue';
    }
    logIn (phoneNumber, password){
        cy.get(this.getLoginModalButton(),{timeout:15000}).click();
        cy.get(this.getLoginPhoneNumberField(),{timeout:15000}).type(phoneNumber);
        cy.get(this.getLoginPasswordField(),{timeout:15000}).type(password);
        cy.get(this.getConnectButton(),{timeout:15000}).click();
    }
    getConfirmationCode(phoneNumber) {
        return new Cypress.Promise((resolve, reject) => {
            cy.request(this.getApiUrl() + '/api/mobile/v1/auth/sms_code/' + phoneNumber)
                .then((response) => {
                    expect(response.status).to.eq(200);
                    let code = response.body.code;
                    resolve(code);
                });
        })
    }
}