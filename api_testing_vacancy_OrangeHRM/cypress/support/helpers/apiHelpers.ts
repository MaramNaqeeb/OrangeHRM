const baseUrl = Cypress.config().baseUrl;
import { vacancyId } from "./payLoads";
export const URLs = {
  vacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
  editVacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies/8`,
  getVacancy:`${baseUrl}/web/index.php/api/v2/recruitment/vacancies?limit=50&offset=0&vacancyId=${vacancyId}&sortField=vacancy.name&sortOrder=ASC&model=detailed`,
  deleteVacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
};

export default class apiHelpers {
  static addVacancy(payload: Object) {
    cy.API("POST", URLs.vacancy, payload);
  }
  static editVacancy(payload: object) {
    cy.API("PUT", URLs.editVacancy, payload);
  }
  static getVacancy(payload:object){
    cy.API("GET",URLs.getVacancy,payload)
  }
  static deleteVacancy(payload: Object) {
    cy.API("DELETE", URLs.deleteVacancy, payload);
  }

}
