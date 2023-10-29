import candidate from "../../support/projectObject/candidate";


const candidateObj: candidate = new candidate();


describe("OrangeHRM-create and edit vacancy", () => {
  beforeEach(function () {
    cy.visit("/");
    candidateObj.loginFUNC("Admin", "admin123");
    cy.writeFile('cypress/fixtures/buzz.txt','Hiiii')
    
  });

  it("TCs2: OrangeHRM-edit vacancy", () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz'
    );
    cy.readFile('cypress/fixtures/buzz.txt').then((str) => {
      cy.get(".oxd-buzz-post-input").type(str)
      cy.get('[type="submit"]').click()
      cy.get(".orangehrm-buzz-newsfeed-posts").contains(str)
    })
  
    
  });

});
