import { Data } from "@angular/router";

export class Employee {

    id: number  = 0 ;

    firstName :    string = "";
    lastName:      string = "";
    county:        string = "";
    town:          string = "";
    address:       string = "";
    phone:         string = "";
    mobile:        string = "";
    emailId:       string = "";
    hope:          string = "";
    immersedDate!: Date;
    birthDay!:     Date; 
}