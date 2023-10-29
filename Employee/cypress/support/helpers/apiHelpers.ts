const baseUrl = Cypress.config().baseUrl;
import {
  newEmployeeData,
  newUserData,
  newTimeSheetData,
} from "./payLoadFunctions";


export let empId: any;

export const URLs = {
  addEmployeeForm: `${baseUrl}/web/index.php/pim/addEmployee`,
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  user: `${baseUrl}/web/index.php/api/v2/admin/users`,
  delete: `${baseUrl}/web/index.php/api/v2/pim/employees`,
};

export default class apiHelpers {
  static addEmployee() {
    return cy.API("POST", URLs.employee, newEmployeeData()).then((response) => {
      empId = response.body.data.empNumber;
      cy.log(empId);
    });
  }
  static addUser(employeeId: any) {
    cy.user("POST", URLs.user, newUserData());
  }

  static getRequest(): Cypress.Chainable<number> {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet"
    );
    return cy
      .api(
        "GET",
        "/web/index.php/api/v2/time/timesheets/default?date=2023-10-28"
      )
      .then((res) => res.body.data.id);
  }
  static newTimesheet(id: any) {
    return cy.API(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${id}/entries`,
      newTimeSheetData()
    );
  }
  static submitTimeSheetAction(id: any) {
    return cy.API(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${id}`,
      { action: "SUBMIT" }
    );
  }
}
