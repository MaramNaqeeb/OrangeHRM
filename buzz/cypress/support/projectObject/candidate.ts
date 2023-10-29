class Candidate {
  elements = {
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBTN: () => cy.get("[type=submit]"),
    firstName: () => cy.get(".oxd-input.oxd-input--active.orangehrm-firstname"),
    lastName: () => cy.get(".oxd-input.oxd-input--active.orangehrm-lastname"),
    email: () => cy.get(".oxd-input").eq(4),
    uploadFile: () => cy.get('input[type="file"]'),
    saveBtn: () => cy.get('button[type="submit"]'),
    
    addCandidateBtn: () => cy.get(".orangehrm-header-container > .oxd-button"),
    assert: () => cy.get(".orangehrm-file-preview"),
    loadingSpinner: () => cy.get(".oxd-loading-spinner"),
    downloadIcon:()=>cy.get(".oxd-icon.bi-download.orangehrm-file-download")
  };

  loginFUNC(userName: string, password: string) {
    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click();
  }
  uploadFile(filePath: string) {
    this.elements.addCandidateBtn().click();
    this.elements.firstName().type("John");
    this.elements.lastName().type("Hathaway");
    this.elements.email().type("j@gmail.com");
    this.elements.uploadFile().selectFile(filePath, { force: true });
    this.elements.saveBtn().click();
    this.elements.loadingSpinner().should("not.exist");
    this.elements
      .assert()
      .should("contain", filePath.substring(filePath.lastIndexOf("/") + 1));
  }
  downloadFile(xlsxPath:string,jsonName:string){
    this.elements.downloadIcon().click()
    cy.task('convertXlsxToJson',xlsxPath)
    cy.fixture(jsonName).as('userInfo')
    cy.get('@userInfo').should('have.length',1).then((userInfo)=>{
      // expect(userInfo[0]['task1']).to.equal('reading')
    
    })
  
  }
}
export default Candidate;
