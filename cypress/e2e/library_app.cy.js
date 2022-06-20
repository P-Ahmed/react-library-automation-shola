describe("Test on React Library App", () => {

  const randomNumber = Math.floor((Math.random() * 99999) + 1);
  const userName = "jackson" + randomNumber;
  const password = "Password123";

  before(() => {
    cy.visit("https://ts-e2e-challenge.netlify.app/list");
  })

  it("Valid sign-up", () => {
    cy.xpath("//button[contains(text(),'Register')]").click();
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.xpath("//div[contains(text(),'" + userName + "')]").contains(userName);
    cy.xpath("//button[contains(text(),'Logout')]").click();
  })

  it("Invalid sign up", () => {
    cy.xpath("//button[contains(text(),'Register')]").click();
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.xpath("//pre[contains(text(),'Cannot create a new user with the username')]").contains("Cannot create a new user with the username");
    cy.xpath("//button").eq(2).click();
  })


  it("Verifies that books are in reading list", () => {
    cy.xpath("//button[contains(text(),'Login')]").click();
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.xpath("//a[contains(text(),'Discover')]").eq(0).click();
    cy.get('#search').type("Voice of War");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//h2[contains(text(),'Voice of War')]").click();
    cy.xpath("//button[@aria-label='Add to list']").click();
    cy.wait(3000);
    cy.xpath("//a[contains(text(),'Reading List')]").click();
    cy.xpath("//h2[contains(text(),'Voice of War')]").contains("Voice of War");
  })
})