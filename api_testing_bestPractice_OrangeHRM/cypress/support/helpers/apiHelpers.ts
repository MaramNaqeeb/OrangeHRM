const baseUrl = Cypress.config().baseUrl;
import { newVacancy, vacancyId,editVacancies,getVacancy,deleteVacancy } from "./payLoadFunctions";
export const URLs = {
  vacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
  editVacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies/8`,
  getVacancy:`${baseUrl}/web/index.php/api/v2/recruitment/vacancies?limit=50&offset=0&vacancyId=${vacancyId}&sortField=vacancy.name&sortOrder=ASC&model=detailed`,
  deleteVacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
};

export default class apiHelpers {
  static addVacancy() {
    cy.vacancy("POST", URLs.vacancy, newVacancy());
  }
  static editVacancy() {
    cy.vacancy("PUT", URLs.editVacancy, editVacancies());
  }
  static getVacancy(){
    cy.vacancy("GET",URLs.getVacancy,getVacancy())
  }
  static deleteVacancy() {
    cy.vacancy("DELETE", URLs.deleteVacancy, deleteVacancy());
  }

}
