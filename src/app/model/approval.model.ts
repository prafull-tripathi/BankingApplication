import { Account } from "./account.model";

export class Approval{
    customerId: number;
    title:string;
    firstName: string;
    middleName: string;
    lastName: string;
    fatherName: string;
    mobileNumber: number;
    emailId: string;
    aadharNumber: number;
    dob: string;
    gender: string;
    residentialAddress: string;
    permanentAddress: string;
    pancardNumber: string;
    occupationType: string;
    sourceOfIncome: string;
    grossAnnualIncome: number;
    debitCard: number;
    netBanking: number;
    status: number;
    account: Account;
}