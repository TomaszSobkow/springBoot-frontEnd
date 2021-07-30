import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  

  constructor( 
    private router: Router,
    private employService: EmployeeService,
    private activatedRout: ActivatedRoute) { }

  title: string = 'Employee Details'
  employee!: Employee;
  employees!: Employee[]; 

   date!: Date ;
   toDay!:  number;
   month!:  number;
   year!:   number;

   age : number = 12;
   inTruth: number = 13;

   id: number = 0;
   empty: string = 'NO data'



   
   getAge(){
     this.age = this.date.getFullYear();
     return this.toDay + "/" + this.month + "/" + this.year;
     
   }

   getImmersed(){
    this.inTruth = this.date.getFullYear();
   }
   
    

  onSubmit(){ 
    this.employService.updateEmployee(this.id, this.employee).subscribe( data => {
      console.log(data);
      //this.goToEmployeeList();
      this.getAge();
    }, error => console.log(error));
    
  }

   getEmployees(){
    this.employService.getEmployeesList().subscribe( data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number){
    this.employService .deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.date = new Date();
    this.toDay = this.date.getDay();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
   
    this.employee = new Employee();
    this.id = this.activatedRout.snapshot.params['id'];

    this.employService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data
    })
    

  }

}
