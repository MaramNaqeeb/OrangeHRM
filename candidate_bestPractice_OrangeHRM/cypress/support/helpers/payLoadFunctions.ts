import generatingFunctions from "./genericFunctions";
import { candidatePayload } from "../API/payload/candidatePayload";
export var vacancyId: any = generatingFunctions.randomNumber();
const firstName:any=` Jane ${Math.random()*1000}`
const LastName:any=` Hathawane ${Math.random()*1000}`
const email:any=`Jane${Math.random()*1000}@gmail.com` 

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
  



