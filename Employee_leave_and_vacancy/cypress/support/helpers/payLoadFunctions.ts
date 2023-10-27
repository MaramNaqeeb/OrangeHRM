import generatingFunctions from "./genericFunctions";
import { EmployeePayload } from "../API/payload/employeePayload";
import { UserPayload } from "../API/payload/userPayload";
import { empId } from "../../e2e/OrangeHRM/addEmployee.spec.cy";
import { EntitlementPayload } from "../API/payload/entitlementPayload";
import { LeavePayload } from "../API/payload/leavePayload";
import { ApproveLeavePayload } from "../API/payload/approveLeavePayload";
import { VacancyPayload } from "../API/payload/vacancyPayload";
import { JobTitlePayload } from "../API/payload/jobTitlePayload";
import { jobId } from "../../e2e/OrangeHRM/addEmployee.spec.cy";
export const employeeFirstName: string = `Ann`;
export const employeeLastName: string = `Hathaway ${generatingFunctions.randomNumber()}`;
const employeeId: any = `${generatingFunctions.randomNumber()}`;
export const username: string = `Johnj${generatingFunctions.randomNumber()}`;
export const password: string = `123qwe,./${generatingFunctions.randomNumber()}`;
const leaveID: number = Math.floor(Math.random() * 10);

export const newEmployeeData = (e?: EmployeePayload): any => {
  let employee: any = {
    empPicture: null,
    employeeId: employeeId,
    firstName: employeeFirstName,
    lastName: employeeLastName,
    middleName: "",
  };
  return employee;
};
export const newUserData = (u?: UserPayload): any => {
  let user: any = {
    empNumber: empId,
    password: password,
    status: true,
    userRoleId: 2,
    username: username,
  };
  return user;
};

export const entitlementData = (e?: EntitlementPayload): any => {
  let entitle: any = {
    empNumber: empId,
    entitlement: "30",
    fromDate: "2023-01-01",
    leaveTypeId: leaveID,
    toDate: "2023-12-31",
  };
  return entitle;
};
export const leaveData = (l?: LeavePayload): any => {
  let leave: any = {
    comment: null,
    duration: {
      type: "half_day_morning",
    },
    fromDate: "2023-10-26",
    leaveTypeId: leaveID,
    partialOption: "start",
    toDate: "2023-11-02",
  };
  return leave;
};
export const approveLeaveData = (a?: ApproveLeavePayload): any => {
  let approve: any = {
    action: "APPROVE",
  };
  return approve;
};
export const jobTitleData = (j?: JobTitlePayload): any => {
  let job: any = {
    description: "",
    note: "",
    specification: null,
    title: `QA${generatingFunctions.randomNumber()}`,
  };
  return job;
};
export const addVacancyData = (v?: VacancyPayload): any => {
  let vacancy: any = {
    description: "",
    employeeId: empId,
    isPublished: true,
    jobTitleId: jobId,
    name: "Testing" || v?.name,
    numOfPositions: 2,
    status: true,
  };
  return vacancy;
};


