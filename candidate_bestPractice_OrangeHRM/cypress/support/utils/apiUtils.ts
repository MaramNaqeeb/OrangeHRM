import { candidateResponse } from "../API/response/candidateResponse";
let candidateId: any;

declare global {
  namespace Cypress {
    interface Chainable {
      candidate: (
        method: string,
        requestUrl: string,
        candidatePayload: string
      ) => Chainable<candidateResponse>;
    }
  }
}

Cypress.Commands.add(
  "candidate",
  (method: string, requestUrl: string, candidatePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: candidatePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200)
      })
      .its("body");
      
  }
);
