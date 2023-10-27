const baseUrl = Cypress.config().baseUrl;
import {
  approveLeaveData,
  entitlementData,
  leaveData,
  newEmployeeData,
  newUserData,
  addVacancyData,
  jobTitleData,
} from "./payLoadFunctions";

let empId: any;
export let userId: number;
export let vacancyId: any;
export let jobID: any;
let leaveId: number;

export const URLs = {
  addEmployeeForm: `${baseUrl}/web/index.php/pim/addEmployee`,
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  user: `${baseUrl}/web/index.php/api/v2/admin/users`,
  entitlement: `${baseUrl}/web/index.php/api/v2/leave/leave-entitlements`,
  leave: `${baseUrl}/web/index.php/api/v2/leave/leave-requests`,
  jobTitle: `${baseUrl}/web/index.php/api/v2/admin/job-titles`,
  vacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
};

export default class apiHelpers {
  static addEmployee() {
    return new Cypress.Promise((resolve, reject) => {
      cy.employee("POST", URLs.employee, newEmployeeData())
        .then((response) => {
          empId = response.data.empNumber;
          resolve(empId);
        })

        .then(() => cy.user("POST", URLs.user, newUserData()))
        .then((response) => {
          userId = response.data.userRole.id;
        });
    });
  }
  static addEntitlement() {
    cy.entitlement("POST", URLs.entitlement, entitlementData());
  }

  static addLeave() {
    return new Cypress.Promise((resolve, reject) => {
      cy.leave("POST", URLs.leave, leaveData()).then((response) => {
        leaveId = response.data.id;
        resolve(leaveId);

        console.log(leaveId);
      });
    });
  }
  static approveLeave(id: any) {
    cy.approveLeave(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/leave/employees/leave-requests/${id}`,
      approveLeaveData()
    );
  }

  static addJobTitle() {
    return new Cypress.Promise((resolve, reject) => {
      cy.jobTitle("POST", URLs.jobTitle, jobTitleData()).then((response) => {
        jobID = response.data.id;
        console.log(jobID);
        resolve(jobID);
      });
    });
  }
  static addVacancy() {
    return new Cypress.Promise((resolve, reject) => {
      cy.vacancy("POST", URLs.vacancy, addVacancyData()).then((response) => {
        vacancyId = response.data.id;
        resolve(vacancyId);
      });
    });
  }
}
