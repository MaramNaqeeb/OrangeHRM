class login {
  elements = {
    userName: () => cy.getByCy("Username"),

    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    invalidCredentials: () => cy.get(".oxd-alert-content > .oxd-text"),

    required: () => cy.get(".oxd-input-field-error-message"),
    dashboard: () => cy.get(".oxd-topbar-header-breadcrumb-module"),
    requiredUserName: () =>
      cy.get(":nth-child(2) > .oxd-input-group > .oxd-text"),
    requiredPassword: () =>
      cy.get(":nth-child(3) > .oxd-input-group > .oxd-text"),
  };

  assertMessage = [
    {
      msg: "Invalid credentials",
      elem: this.elements.invalidCredentials,
    },
    {
      msg: "Required",
      elem: this.elements.required,
    },
    {
      msg: "Dashboard",
      elem: this.elements.dashboard,
    },
  ];

  loginAdmin(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }
  verifyMessage(message: string) {
    this.assertMessage.find(({ msg }) => msg === message)?.elem;

    if (message == "Invalid credentials") {
      cy.contains(message, { timeout: 10000 }).should("be.visible");
    } else if (message == "Required") {
      cy.contains(message, { timeout: 10000 }).should("be.visible");
    }
  }

  verifyHiddenPassword() {
    this.elements.password().should("have.attr", "type", "password");
  }
  requiredAfterUserName() {
    this.elements
      .requiredUserName()
      .contains("Required")
      .prevAll()
      .contains("Username");
  }
  requiredAfterPassword() {
    this.elements
      .requiredPassword()
      .contains("Required")
      .prevAll()
      .contains("Password");
  }
}

export default login;
