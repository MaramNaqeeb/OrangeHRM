import apiHelpers from "../../support/helpers/apiHelpers";
import login from "../../support/projectObject/loginAdmin";

const loginObj: login = new login();

describe("OrangeHRM-create and edit vacancy", () => {
  beforeEach(function () {
    cy.visit("/");
    loginObj.loginFUNC("Admin", "admin123");
    apiHelpers.addVacancy();
  });
  afterEach(function () {
    apiHelpers.deleteVacancy();
  });
  it("TCs1: OrangeHRM-get vacancy", () => {
    apiHelpers.getVacancy();
  });
  it("TCs2: OrangeHRM-edit vacancy", () => {
    apiHelpers.editVacancy();
  });
});
