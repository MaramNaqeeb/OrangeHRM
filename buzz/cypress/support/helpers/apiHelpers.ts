const baseUrl = Cypress.config().baseUrl;
import { newCandidate, shortlistStatus} from "./payLoadFunctions";
export var candidateId:any;
export const URLs = {
  candidate: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`,
 
};

export default class apiHelpers {
  static addCandidate() {
    cy.candidate("POST", URLs.candidate, newCandidate()).then((response)=>{
    candidateId=response.data.id
    })
  }
  static stateShortlistStatus() {
    cy.visit(
      `/web/index.php/recruitment/addCandidate/${candidateId}`,
      {
        failOnStatusCode: false,
      }
    )
    cy.candidate("PUT", `${baseUrl}/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`, shortlistStatus());
  }
 

}
