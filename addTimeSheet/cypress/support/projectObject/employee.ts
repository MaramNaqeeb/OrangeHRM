class Employee {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    logoutDropdown: () => cy.get(".oxd-userdropdown-tab"),
    logoutBtn: () => cy.contains("Logout"),
    tableSelector: () => cy.get(".orangehrm-container"),
    rowSelector: () => cy.get(".oxd-table-row"),
  };
  

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }
  logout() {
    this.elements.logoutDropdown().click();
    this.elements.logoutBtn().click({ multiple: true });
  }
  GridAssertionGenericFunction(searchMap: any) {
    cy.visit("/web/index.php/time/viewEmployeeTimesheet");

    this.elements
      .tableSelector()
      .find(".oxd-table-row")
      .filter(`:contains(${searchMap})`)
      .should("exist");
  }
}

export default Employee;
