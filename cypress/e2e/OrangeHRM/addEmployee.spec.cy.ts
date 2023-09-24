import addEmployee from "../../support/projectObject/addEmployee";
let empId: number;
let username: string = "enyynnamiiifkag";
const addEmp: addEmployee = new addEmployee();

describe("my first test", () => {
  beforeEach(function () {
    cy.visit("/");
    addEmp.loginFUNC("Admin", "admin123");
    cy.fixture("employee").as("addEmp");
    cy.get("@addEmp").then((emp: any) => {
      cy.request({
        method: "POST",
        url: "/web/index.php/api/v2/pim/employees",
        body: {
          firstName: emp.firstName,
          middleName: emp.middleName,
          lastName: emp.lastName,
          employeeId: `${Math.round(10000 * Math.random())}`,
        },
      }).then((response) => {
        console.log("mmm");
        empId = response.body.data.empNumber;
        console.log(empId);
        console.log(response);
        expect(response).property("status").to.equal(200);
      });
      cy.get("@addEmp").then((user: any) => {
        cy.request({
          method: "POST",
          url: "/web/index.php/api/v2/admin/users",
          body: {
            username: username,
            status: true,
            empNumber: empId,
            userRoleId: 2,
            password: user.password,
          },
        }).then((response) => {
          expect(response).property("status").to.equal(200);
          console.log(response.body.data.userName);
          cy.visit(
            `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList`
          );
        });
      });
    });
  });
  it("search employee", () => {
    cy.get("@addEmp").then((user: any) => {
      addEmp.searchEmployee([
        {
          key: "Employee Name",
          value: user.firstName + " " + user.middleName + " " + user.lastName,
        },
      ]);
      addEmp.assertEmployeeName(user.firstName, user.lastName);
      addEmp.personalInfo(
        user.nickName,
        user.otherid,
        user.driverLicense,
        user.licenceExpiredDate,
        user.SSNNumber,
        user.SINNumber,
        user.nationality,
        user.marital,
        user.birthDate,
        user.military
      );
    });
  });
});
