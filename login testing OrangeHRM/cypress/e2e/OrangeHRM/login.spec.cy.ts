import login from "../../support/projectObject/login";

const loginObj: login = new login();
describe("login admin", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("login").as("login");
  });
  it("login with a right username and password", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[0].right_username, login[0].right_password);
      loginObj.verifyMessage(login[0].main_page_dashboard);
    });
  });

  it("login with a lowercase username", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[1].lowerCase_username, login[1].right_password);
      loginObj.verifyMessage(login[1].main_page_dashboard);
    });
  });
  it("login with a wrong username", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[2].wrong_username, login[2].right_password);
      loginObj.verifyMessage(login[2].validation_message);

    });
  });
  it("login with a wrong password", () => {
    cy.get("@login").then((login: any) => {
      
      loginObj.loginAdmin(login[3].right_username, login[3].wrong_password);
      loginObj.verifyMessage(login[3].validation_message);

    });
    
  });
  
  it("login with a wrong username and wrong password", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[4].wrong_username, login[4].wrong_password);
      loginObj.verifyMessage(login[4].validation_message);
    });
  });
  it("login with an empty username", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[5].empty_username, login[5].right_password);
      loginObj.verifyMessage(login[5].error_message);
      loginObj.requiredAfterUserName();
    });
  });
  it("login with an empty password", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[6].right_username, login[6].empty_password);
      loginObj.verifyMessage(login[6].error_message);

      loginObj.requiredAfterPassword();
    });
  });
  it("login with empty username and empty password", () => {
    cy.get("@login").then((login: any) => {
      loginObj.loginAdmin(login[7].empty_username, login[7].empty_password);
      loginObj.verifyMessage(login[7].error_message);
      loginObj.requiredAfterUserName();
      loginObj.requiredAfterPassword();
    });
  });
  it("verify the hidden format of the password", () => {
    cy.get("@login").then((login: any) => {
      loginObj.verifyHiddenPassword();
    });
  });
});
