import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRout: ActivatedRoute) { }

  title: string = "Update employee component";
  employee!: Employee;
  id : number = 0;


  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
   };

  


  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.activatedRout.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    },
    error => console.log(error))

  }

}
