import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
  employeeForm;

  constructor(private formBuilder: FormBuilder, private employeesService: EmployeesService) {
    this.employeeForm = formBuilder.group({
      name: '',
      salary: '',
      age: ''
    })
  }

  ngOnInit() {
  }

  addEmployee(employee) {
    this.employeesService.addEmployee(employee).subscribe(value => {
      console.log(value);
    })
  }
}
