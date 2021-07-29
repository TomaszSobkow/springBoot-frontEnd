import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employService: EmployeeService, private router: Router ) {  }

  title =  "employee-List-Component";
  
  age! : number ; 
  employees: Employee[] = [] ;

 

  ngOnInit(): void {
    this.getEmployees();

  }


  getEmployeeDetails(id: number){
    this.router.navigate(['employee-details', id])
  }

  private getEmployees(){
    this.employService.getEmployeesList().subscribe( data => {
      this.employees = data;
    });
  }
  

}
