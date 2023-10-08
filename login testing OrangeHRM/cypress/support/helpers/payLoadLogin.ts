import login from "../projectObject/login";

const loginObj: login = new login();
var loginPayLoad: any;

class payloadLogin {
  static validUserNameAndPassword() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[0].right_username,
          login[0].right_password
        ),
        dashboard: loginObj.verifyMessage(login[0].main_page_dashboard),
        
      };
    });
  }
  static lowecaseUsername() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[1].lowerCase_username,
          login[1].right_password
        ),
        dashboard: loginObj.verifyMessage(login[1].main_page_dashboard),
      };
    });
  }
  static wrongUserName() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[2].wrong_username,
          login[2].right_password
        ),
        validationMessage: loginObj.verifyMessage(login[2].validation_message),
      };
    });
  }
  static wrongPassword() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[3].right_username,
          login[3].wrong_password
        ),
        validationMessage: loginObj.verifyMessage(login[3].validation_message),
      };
    });
  }
  static wrongUsernameAndPassword() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[4].wrong_username,
          login[4].wrong_password
        ),
        validationMessage: loginObj.verifyMessage(login[4].validation_message),
      };
    });
  }
  static emptyUserName() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[5].empty_username,
          login[5].right_password
        ),
        errorMessage: loginObj.verifyMessage(login[5].error_message),
        requiredLocation: loginObj.requiredAfterUserName(),
      };
    });
  }
  static emptyPassword() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[6].right_username,
          login[6].empty_password
        ),
        errorMessage: loginObj.verifyMessage(login[6].error_message),
        requiredLocation: loginObj.requiredAfterPassword(),
      };
    });
  }
  static emptyUsernameAndPassword() {
    cy.get("@login").then((login: any) => {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
          login[7].empty_username,
          login[7].empty_password
        ),
        errorMessage: loginObj.verifyMessage(login[7].error_message),
        requiredAfterUsername: loginObj.requiredAfterUserName(),
        requiredAfterPassword: loginObj.requiredAfterPassword(),
      };
    });
  }
  static hiddenPassword() {
    loginPayLoad = {
      hiddenPassword: loginObj.verifyHiddenPassword(),
    };
  }
}

export default payloadLogin;
