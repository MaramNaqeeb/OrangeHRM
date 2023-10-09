import apiHelpers from "../../support/helpers/apiHelpers";
import {
  newVacancy,
  deleteVacancy,
  editVacancies,
  getVacancy,
} from "../../support/helpers/payLoads";
import login from "../../support/projectObject/loginAdmin";


const loginObj: login = new login();

describe("OrangeHRM-create and edit vacancy", () => {
  beforeEach(function () {
    cy.visit("/");
    loginObj.loginFUNC("Admin", "admin123");
    apiHelpers.addVacancy(newVacancy());
  });
  afterEach(function() {
    apiHelpers.deleteVacancy(deleteVacancy());
  });
  it('TCs1: OrangeHRM-get vacancy',()=>{
    apiHelpers.getVacancy(getVacancy())
  })
  it("TCs2: OrangeHRM-edit vacancy", () => {
    apiHelpers.editVacancy(editVacancies());
  });

 
});
