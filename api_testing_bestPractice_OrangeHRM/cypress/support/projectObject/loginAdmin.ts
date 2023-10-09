class loginAdmin {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
  };

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
    this.elements.password().type(password),
    this.elements.loginBTN().click({ force: true });
  }
  
}

export default loginAdmin;
