class genericFunctoinModules {
  static genericFunction(
    pageUrl: string,
    tableSelector: string,
    rowSelector: string,
    searchMap: any
  ) {
    cy.visit(pageUrl);

    cy.get(tableSelector)
      .find(rowSelector)
      .filter(`:contains(${searchMap})`)
      .should("exist");
  }
}

export default genericFunctoinModules;
