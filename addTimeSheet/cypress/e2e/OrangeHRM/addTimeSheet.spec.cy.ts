import apiHelpers from "../../support/helpers/apiHelpers";
import Employee from "../../support/projectObject/employee";
import {
  password,
  username,
  employeeLastName,
} from "../../support/helpers/payLoadFunctions";

const employeeObj: Employee = new Employee();
let searchMap: any = {
  "Employee Name": employeeLastName,
  "Timesheet Period": "2023-10-23 - 2023-10-29",
  "Actions": "View",
};

describe("OrangeHRM-loginAdmin prerequisite", () => {
  beforeEach(function () {
    cy.fixture("employee.json").as("employee");
    cy.get("@employee").then((emp: any) => {
      cy.visit("/");
      employeeObj.loginFUNC(emp.admin, emp.password);
      apiHelpers.addEmployee().then((employeeId) => {
        apiHelpers.addUser(employeeId);
      });
    });
  });
  it("TCs1: OrangeHRM-addTimeSheet", () => {
    cy.get("@employee").then((emp: any) => {
      employeeObj.logout();
      employeeObj.loginFUNC(username, password);

      apiHelpers.getRequest().then((id) => {
        apiHelpers.newTimesheet(id);
        apiHelpers.submitTimeSheetAction(id);
      });

      employeeObj.logout();
      cy.visit("/");
      employeeObj.loginFUNC(emp.admin, emp.password);

      employeeObj.GridAssertionGenericFunction(searchMap["Employee Name"]);
    });
    
  });
});
