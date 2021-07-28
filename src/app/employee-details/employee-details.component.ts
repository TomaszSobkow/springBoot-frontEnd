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

  id: number = 0;
  empty: string = 'NO data'

  onSubmit(){ }

  updateEmployee(){
    this.employService.updateEmployee(this.id, this.employee).subscribe( data => {
      this.goToEmployeeList();
    })

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

  saveEmployee(){
    this.employService .createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.activatedRout.snapshot.params['id'];

    this.employService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data
    })
    

  }

}
