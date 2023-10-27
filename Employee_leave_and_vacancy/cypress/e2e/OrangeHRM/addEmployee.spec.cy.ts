import apiHelpers from "../../support/helpers/apiHelpers";
import Employee from "../../support/projectObject/employee";
import { password, username } from "../../support/helpers/payLoadFunctions";
export let id: any;
export let empId: any;
const employeeObj: Employee = new Employee();
export let vacancyID: any;
export let jobId: any;
let filePath: string = "cypress/fixtures/vacancy.txt";
let vacancyFileName: any = filePath.lastIndexOf("/");
let searchMap: any = {
  "File Name": filePath.slice(vacancyFileName + 1),
  "File Size": "0.01 kb",
  "File Type": "text/plain",
  comment: "",
  Actions: ".oxd-table-cell-actions",
};
before(function () {
  cy.visit("/");
  employeeObj.loginFUNC("Admin", "admin123");
  apiHelpers.addEmployee().then((resolve) => {
    empId = `${resolve}`;
    apiHelpers.addEntitlement();
  });

  employeeObj.logout();
});

describe("OrangeHRM-addEmployee and Entitlement-prerequisite", () => {
  beforeEach(function () {
    employeeObj.loginFUNC(username, password);
    apiHelpers.addLeave().then((resolve) => {
      id = `${resolve}`;
      employeeObj.logout();
     
    });
  });

  it("TCs1: Check leave in the leave grid ", () => {
    cy.visit("/");
    employeeObj.loginFUNC("Admin", "admin123");
    apiHelpers.approveLeave(id);
    employeeObj.logout();
    cy.visit("/");

    employeeObj.loginFUNC(username, password);
    cy.visit("/web/index.php/leave/viewMyLeaveList");
    employeeObj.assertLeave("Scheduled");
  });
});
describe("OrangeHRM-addEmployee and addVacancy-prerequisite", () => {
  beforeEach(function () {
    cy.visit("/");
    employeeObj.loginFUNC("Admin", "admin123");
    apiHelpers.addJobTitle().then((resolve) => {
      jobId = `${resolve}`;
      apiHelpers.addVacancy().then((resolve) => {
        vacancyID = `${resolve}`;
      });
    });
  });

  it("TCs1: upload vacancy file", () => {
    cy.visit(
      `https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy/${vacancyID}`
    );

    employeeObj.uploadVacancyFile(filePath);
    employeeObj.assertVacancyUploadedFile(
      ".orangehrm-container",
      ".oxd-table-card",
      searchMap["File Name"]
    );
  });
});
