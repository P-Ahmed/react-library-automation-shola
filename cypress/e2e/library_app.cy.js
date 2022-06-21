import HomePage from "../pages/homePage"
import UserDashboardPage from "../pages/userDashboardPage"

describe("Test on React Library App", () => {

  const homePage = new HomePage();
  const userDashboardPage = new UserDashboardPage();
  const randomNumber = Math.floor((Math.random() * 99999) + 1);
  const userName = "jackson" + randomNumber;
  const password = "Password123";
  const bookName = "Voice of War";

  before(() => {
    cy.visit("https://ts-e2e-challenge.netlify.app/list");
  })

  it("Valid sign-up", () => {
    homePage.doRegistration(userName, password);
    userDashboardPage.verifyUserName(userName);
    userDashboardPage.logout();
  })

  it("Invalid sign up", () => {
    homePage.doRegistration(userName, password);
    homePage.verifyUserNameIsExistInRegistration();
    homePage.closingLoginOrRegistrationWindow();
  })


  it("Verifies that books are in reading list", () => {
    homePage.doLogin(userName, password);
    userDashboardPage.gotoDiscover();
    userDashboardPage.searchForBook(bookName);
    userDashboardPage.addBookInTheList(bookName);
    cy.wait(3000);
    userDashboardPage.gotoReadingList();
    userDashboardPage.verifyBookIsAddedInReadingList(bookName);
  })
})