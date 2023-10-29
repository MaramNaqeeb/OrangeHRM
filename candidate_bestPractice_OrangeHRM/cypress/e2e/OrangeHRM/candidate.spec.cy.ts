import apiHelpers from "../../support/helpers/apiHelpers";
import candidate from "../../support/projectObject/candidate";

const loginObj: candidate = new candidate();

describe("OrangeHRM-create and edit vacancy", () => {
  
  beforeEach(function () {
    cy.visit("/");
    loginObj.loginFUNC("Admin", "admin123");
    apiHelpers.addCandidate()

      
  });

  it("TCs2: OrangeHRM-edit vacancy", () => {
    apiHelpers.stateShortlistStatus()
   loginObj.scheduleInterview()
  });
});
