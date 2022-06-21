class HomePage {
    doLogin(userName, password) {
        cy.xpath("//button[contains(text(),'Login')]").click();
        cy.get('#username').type(userName);
        cy.get('#password').type(password);
        cy.get('[type="submit"]').click();
    }
    doRegistration(userName, password) {
        cy.xpath("//button[contains(text(),'Register')]").click();
        cy.get('#username').type(userName);
        cy.get('#password').type(password);
        cy.get('[type="submit"]').click();
    }
    closingLoginOrRegistrationWindow() {
        cy.xpath("//button").eq(2).click();
    }
    verifyUserNameIsExistInRegistration() {
        cy.xpath("//pre[contains(text(),'Cannot create a new user with the username')]").contains("Cannot create a new user with the username");
    }
}
export default HomePage;