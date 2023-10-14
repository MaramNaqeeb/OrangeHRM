class Candidate {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    interviewBtn: () => cy.get(".oxd-button--success"),
    interviewTitle: () =>
      cy.get(
        ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    interviewerIcon: () => cy.getByCy("Type for hints..."),
    interviewrMenu: () => cy.get(".oxd-autocomplete-dropdown > :nth-child(1)"),
    dateIcon: () => cy.get(".oxd-icon.bi-calendar.oxd-date-input-icon"),
    dateSelection: () => cy.get(".oxd-calendar-date"),
    timeIcon: () => cy.get(".oxd-icon.bi-clock.oxd-time-input--clock"),
    hours: () => cy.get(".oxd-time-hour-input > .bi-chevron-up"),
    minutes: () => cy.get(".oxd-time-minute-input > .bi-chevron-up"),
    amOrPm: () => cy.get('[name="pm"]'),
    note: () => cy.getByCy("Type here"),
    submitBtn: () => cy.get('[type="submit"]'),
  };

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }
  scheduleInterview() {
    this.elements.interviewBtn().click({ force: true });

    this.elements.interviewTitle().type("Testing");
    this.elements.interviewerIcon().type("j");
    cy.intercept(
      "/web/index.php/api/v2/recruitment/interviewers?nameOrId=j"
    ).as("interviewer");
    cy.wait("@interviewer");
    this.elements.interviewrMenu().click();

    this.elements.dateIcon().click({ force: true });
    this.elements.dateSelection().contains(14).click();

    this.elements.timeIcon().click({ force: true });
    this.elements.hours().click();
    this.elements.minutes().click();
    this.elements.amOrPm().click();

    this.elements.note().type("good");
    this.elements.submitBtn().click();
  }
}

export default Candidate;
