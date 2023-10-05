import payloadLogin from "../../support/helpers/payLoadLogin";

describe("login admin", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("login").as("login");
  });
  it("login with a right username and password", () => {
    payloadLogin.validUserNameAndPassword();
  });
  it("login with a lowercase username", () => {
    payloadLogin.lowecaseUsername();
  });
  it("login with a wrong username", () => {
    payloadLogin.wrongUserName();
  });
  it("login with a wrong password", () => {
    payloadLogin.wrongPassword();
  });

  it("login with a wrong username and wrong password", () => {
    payloadLogin.wrongUsernameAndPassword();
  });
  it("login with an empty username", () => {
    payloadLogin.emptyUserName();
  });
  it("login with an empty password", () => {
    payloadLogin.emptyPassword();
  });
  it("login with empty username and empty password", () => {
    payloadLogin.emptyUsernameAndPassword();
  });
  it("verify the hidden format of the password", () => {
    payloadLogin.hiddenPassword();
  });
});
