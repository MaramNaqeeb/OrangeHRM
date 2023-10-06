import generatingFunctions from "./genericFunctions";
import {vacancy, editVacancy } from "../interface/user";
export var vacancyId: any = generatingFunctions.randomNumber();

export const newVacancy = (v?: vacancy): any => {
  var vacancy: any = {
    name: "Development" || v?.name,
    description: "" || v?.description,
    numOfPositions: null,
    employeeId: 3 || v?.employeeId,
    isPublished: true || v?.isPublished,
    jobTitleId: 18 || v?.jobTitleId,
    status: true || v?.status
  };
  return vacancy;
};

export const editVacancies = (edit?: editVacancy): any => {
  var editVacancy: any = {
    name: "Testing" || edit?.name,
    description: "" || edit?.description,
    numOfPositions: null,
    employeeId: 3 || edit?.employeeId,
    isPublished: true || edit?.isPublished,
    jobTitleId: 18|| edit?.jobTitleId,
    status: true || edit?.status
  };
  return editVacancy;
};

export const getVacancy = (): any => {

};
export const deleteVacancy = (): any => {
  var deleteVacancy: any = {
    ids: [vacancyId],
  };
  return deleteVacancy;
};

