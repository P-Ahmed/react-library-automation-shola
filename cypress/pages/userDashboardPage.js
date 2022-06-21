class UserDashboardPage {
    verifyUserName(userName) {
        cy.xpath("//div[contains(text(),'" + userName + "')]").contains(userName);
    }
    logout() {
        cy.xpath("//button[contains(text(),'Logout')]").click();
    }
    gotoDiscover() {
        cy.xpath("//a[contains(text(),'Discover')]").eq(0).click();
    }
    searchForBook(bookName) {
        cy.get('#search').type(bookName);
        cy.xpath("//button[@type='submit']").click();
    }
    addBookInTheList(bookName) {
        cy.xpath("//h2[contains(text(),'" + bookName + "')]").click();
        cy.xpath("//button[@aria-label='Add to list']").click();
    }
    gotoReadingList() {
        cy.xpath("//a[contains(text(),'Reading List')]").click();
    }
    verifyBookIsAddedInReadingList(bookName) {
        cy.xpath("//h2[contains(text(),'" + bookName + "')]").contains(bookName);
    }
}
export default UserDashboardPage;