import { EmployeeResponse } from "../API/response/employeeResponse";
import { TimeSheetResponse } from "../API/response/timeSheetPesponse";
import { UserResponse } from "../API/response/userResponse";

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
      time: (
        method: string,
        requestUrl: string,
        TimeSheetPayload: string
      ) => Chainable<TimeSheetResponse>;
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
  "time",
  (method: string, requestUrl: string, timeSheetPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: timeSheetPayload,
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
