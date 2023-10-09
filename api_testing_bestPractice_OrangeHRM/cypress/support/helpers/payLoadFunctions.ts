import generatingFunctions from "./genericFunctions";
import { vacancyPayload } from "../API/payload/vacancyApiPayload";
export var vacancyId: any = generatingFunctions.randomNumber();

export const newVacancy = (vacancy?: vacancyPayload): any => {
  var addVacancy: any = {
    name: "Development" || vacancy?.name,
    description: "" || vacancy?.description,
    numOfPositions: 2 || vacancy?.numOfPositions,
    employeeId: 3 || vacancy?.employeeId,
    isPublished: true || vacancy?.isPublished,
    jobTitleId: 1 || vacancy?.jobTitleId,
    status: true || vacancy?.status,
  };
  
  return addVacancy;
};

export const editVacancies = (edit?: vacancyPayload): any => {
  var editVacancy: any = {
    name: "Testing" || edit?.name,
    description: "" || edit?.description,
    numOfPositions: 2 || edit?.numOfPositions,
    employeeId: 3 || edit?.employeeId,
    isPublished: true || edit?.isPublished,
    jobTitleId: 1 || edit?.jobTitleId,
    status: true || edit?.status,
  };
  return editVacancy;
};
export const getVacancy = (): any => {};
export const deleteVacancy = (): any => {
  var deleteVacancy: any = {
    ids: [vacancyId],
  };
  return deleteVacancy;
};
