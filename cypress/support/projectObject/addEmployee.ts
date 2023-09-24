class addEmployee {
  elements = {
    userName: () => cy.getByCy("Username"),

    password: () => cy.get("[type=password]"),
    loginBTN: () => cy.get("[type=submit]"),
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),

    AddEmp: () => cy.get(".oxd-button--secondary"),

    EmployeeInputName: () => cy.get(".--name-grouped-field"),

    saveNewEmp: () => cy.get('button[type="submit"]'),
    switchBtn: () => cy.get('input[type="checkbox"]'),
    userName2: () =>
      cy.get(
        ":nth-child(4) > .oxd-grid-2 :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    passwords: () => cy.get('input[type="password"]'),
    saveBtn: () => cy.get('button[type="submit"]'),
    asserName: () =>
      cy.get(".orangehrm-edit-employee-imagesection > :nth-child(1) > h6"),
    PIM: () => cy.get(".oxd-main-menu-item active"),
    loadingIndicator: () => cy.get(".oxd-loading-spinner"),
    nickName: () =>
      cy.get(
        ":nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    otherId: () =>
      cy.get(
        ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    driverLicense: () =>
      cy.get(
        ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    date: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
      ),
    selectDate: () => cy.get(".oxd-date-wrapper"),
    SSN: () =>
      cy.get(
        ":nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    SIN: () =>
      cy.get(
        ":nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    nationality: () =>
      cy.get(
        ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    nationalityOptions: () => cy.get(".oxd-select-option"),
    maritalStatus: () =>
      cy.get(
        ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    maritalOptions: () => cy.get(".oxd-select-wrapper"),
    dateBirth: () =>
      cy.get(
        ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
      ),
    birthOptions: () => cy.get(".oxd-date-wrapper"),
    gender: () => cy.get("[type='radio']"),
    military: () =>
      cy.get(
        ":nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    smoker: () => cy.get("[type='checkbox']"),
    saveInfo: () => cy.get(".oxd-form-actions > :nth-child(2)"),
    employeeId: () => cy.get(".oxd-table-filter"),
    searchBtn: () => cy.get(".oxd-form-actions > .oxd-button--secondary"),
    row: () => cy.get(".orangehrm-container"),
    container: () => cy.get(".oxd-grid-4 > :nth-child(1)"),
    child1: () => cy.get(".oxd-table-body > :nth-child(1) > .oxd-table-row"),
  };

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }

  searchEmployee(arr: { key: any; value: any }[]) {
    {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].key == "Employee Name") {
          this.elements.container().eq(0).type(arr[i].value);
        }

        this.elements.searchBtn().click({ force: true });
        cy.wait(2000);
        this.elements.child1().click({ multiple: true });
      }
    }
  }
  assertEmployeeName(firstName: string, lastName: string) {
    this.elements.loadingIndicator().should("exist");
    this.elements
      .asserName()
      .contains(firstName + " " + lastName)
      .should("exist");
  }
  personalInfo(
    nickName: string,
    otherid: string,
    driverLicense: string,
    licenceExpiredDate: string,
    SSNNumber: string,
    SINNumber: string,
    nationality: string,
    marital: string,
    birthDate: string,
    military: string
  ) {
    this.elements.nickName().type(nickName);
    this.elements.otherId().type(otherid);
    this.elements.driverLicense().type(driverLicense);
    this.elements.date().click({ force: true });
    this.elements.selectDate().contains(licenceExpiredDate).click();
    this.elements.SSN().type(SSNNumber);
    this.elements.SIN().type(SINNumber);
    this.elements.nationality().click({ force: true });
    this.elements.nationalityOptions().contains(nationality).click();
    this.elements.maritalStatus().click({ force: true });
    this.elements.maritalOptions().contains(marital).click();
    this.elements.dateBirth().click({ force: true });
    this.elements.birthOptions().contains(birthDate).click();
    this.elements.gender().eq(1).click({ force: true });
    this.elements.military().type(military);
    this.elements.smoker().check({ force: true });
    this.elements.saveInfo().click();
  }
 
}

export default addEmployee;
