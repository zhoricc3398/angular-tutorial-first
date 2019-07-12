import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$;
  active = false;

  constructor(private employeesService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.active = false;
    this.activatedRoute.paramMap.subscribe(value => {
      const id = +value.get('id');
      if (id) {
        this.active = true;
        this.employees$ = this.employeesService.getEmployeeById(+value.get('id'));
        if (!this.employees$) {
          this.router.navigate(['employees']);
        }
      } else {
        this.employees$ = this.employeesService.getEmployees();
      }
    })
  }

  deleteEmployee(id) {
    return this.employeesService.deleteEmployee(id).subscribe(value => {
      console.log(value);
      this.getEmployees();
    })
  }
}
