import { AccountModel } from "./AccountModel";

export class Account extends AccountModel {
    
     accountid : Number | undefined;
     phoneno : Number | undefined;
     acc_createdDate : Date | undefined; 
     firstName : String | undefined;
     lastName : String | undefined;
     identificationType : String | undefined;  
     identificationNum : Number | undefined; 
     AccountModel = new  AccountModel();
    }

