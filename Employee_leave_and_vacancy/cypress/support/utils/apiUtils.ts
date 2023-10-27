import { ApproveLeaveResponse } from "../API/response/approveLeaveResponse";
import { EmployeeResponse } from "../API/response/employeeResponse";
import { EntitlementResponse } from "../API/response/entitlementResponse";
import { JobTitleResponse } from "../API/response/jobTitleResponse";
import { LeaveResponse } from "../API/response/leaveResponse";
import { UserResponse } from "../API/response/userResponse";
import { VacancyResponse } from "../API/response/vacancyResponse";
declare global {
  namespace Cypress {
    interface Chainable {
      employee: (
        method: string,
        requestUrl: string,
        employeePayload: string
      ) => Chainable<EmployeeResponse>;
      user: (
        method: string,
        requestUrl: string,
        userPayload: string
      ) => Chainable<UserResponse>;
      entitlement: (
        method: string,
        requestUrl: string,
        entitlementPayload: string
      ) => Chainable<EntitlementResponse>;
      leave: (
        method: string,
        requestUrl: string,
        leavePayload: string
      ) => Chainable<LeaveResponse>;
      approveLeave: (
        method: string,
        requestUrl: string,
        approveLeavePayload: string
      ) => Chainable<ApproveLeaveResponse>;
      jobTitle: (
        method: string,
        requestUrl: string,
        jobTitlePayload: string
      ) => Chainable<JobTitleResponse>;
      vacancy: (
        method: string,
        requestUrl: string,
        vacancyPayload: string
      ) => Chainable<VacancyResponse>;
    }
  }
}


Cypress.Commands.add(
  "employee",
  (method: string, requestUrl: string, employeePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: employeePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "user",
  (method: string, requestUrl: string, userPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: userPayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "entitlement",
  (method: string, requestUrl: string, entitlementPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: entitlementPayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "leave",
  (method: string, requestUrl: string, leavePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: leavePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "approveLeave",
  (method: string, requestUrl: string, approveLeavePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: approveLeavePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "jobTitle",
  (method: string, requestUrl: string, jobTitlePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: jobTitlePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "vacancy",
  (method: string, requestUrl: string, vacancyPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: vacancyPayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);
