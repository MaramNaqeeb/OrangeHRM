import generatingFunctions from "./genericFunctions";
import { candidatePayload } from "../API/payload/candidatePayload";
const firstName:any=` Jane ${generatingFunctions.randomNumber()}`
const LastName:any=` Hathawane ${generatingFunctions.randomNumber()}`
const email:any=`Jane${generatingFunctions.randomNumber()}@gmail.com` 

export const newCandidate = (vacancy?: candidatePayload): any => {
  var addCandidate: any = {
    comment: null,
    consentToKeepData: false,
    contactNumber: null,
    dateOfApplication: "2023-10-14",
    email: email,
    firstName: firstName,
    keywords: null,
    lastName: LastName,
    middleName: null,
    vacancyId: 1,
  }
  return addCandidate;
};
  export const shortlistStatus=():any=>{
    var shortlist:any={
      note:null
    }
    return shortlist

  }
  



