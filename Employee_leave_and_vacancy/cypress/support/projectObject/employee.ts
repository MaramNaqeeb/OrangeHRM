class Employee {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    logoutDropdown: () => cy.get(".oxd-userdropdown-tab"),
    logoutBtn: () => cy.contains("Logout"),
    addFileBtn: () => cy.get(".orangehrm-header-container > .oxd-button"),
    uploadFile: () => cy.get('input[type="file"]'),
    saveBtn: () =>
      cy
        .get(
          ".oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"
        )
        .eq(1),
    loadingSpinner: () => cy.get(".oxd-loading-spinner"),
    assertAttachment: () => cy.get(".oxd-table-cell.oxd-padding-cell"),
    tableRow: () => cy.get(".oxd-table-card"),
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

  uploadVacancyFile(filePath: string) {
    this.elements.loadingSpinner().should("not.exist");
    this.elements.addFileBtn().click();
    this.elements.uploadFile().selectFile(filePath, { force: true });
    this.elements.saveBtn().click();
  }
  assertVacancyUploadedFile(
    tableSelector: string,
    rowSelector: string,
    searchMap: any
  ) {
    cy.get(tableSelector)
      .find(rowSelector)
      .filter(`:contains(${searchMap})`)
      .should("exist");
  }
  assertLeave(status: any) {
    this.elements.loadingSpinner().should("not.exist");
    this.elements.tableRow().should("have.length", 1);
    this.elements.assertAttachment().eq(6).should("contain", status);
  }
}

export default Employee;
