import MainPage from './MainPage';
export default class MyAccountPage extends MainPage{
    myPersonalInfoUrl = this.getProjectUrl() + '/customer/profile?tab=personal-information';
    disconnectButton = ':nth-child(2) > .private-office-menu > li > a';
    DisconnectUser(){
        cy.get(this.disconnectButton, {timeout:30000}).click();
    }

}