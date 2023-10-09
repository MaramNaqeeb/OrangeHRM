import { vacancyResponse } from "../API/response/vacancyApiResponse";

declare global {
  namespace Cypress {
    interface Chainable {
      vacancy: (
        method: string,
        requestUrl: string,
        vacancyPayload: string
      ) => Chainable<vacancyResponse>;
    }
  }
}

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
        expect(response.status).to.equal(200);
      })
      .its("body");
  }
);
