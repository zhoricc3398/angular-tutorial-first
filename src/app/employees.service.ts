import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  registeredEmployees = [];

  host = 'http://dummy.restapiexample.com/api/v1'

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`;
    return this.http
      .get(url)
      .pipe(map((employees: IEmployee[]) => {
        return employees.map(employee => {
          return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
          }
        })
      }));
  }

  addEmployee(employee) {
    const url = `${this.host}/create`
    return this.http.post(url, employee);
  }

  getEmployeeById(id) {
    const url = `${this.host}/employee/${id}`;
    return this.http
      .get(url)
      .pipe(map((employee: IEmployee) => {
        return [{
          id: employee.id,
          name: employee.employee_name,
          salary: employee.employee_salary,
          age: employee.employee_age
        }]
    }));
  }

  deleteEmployee(id) {
    const url = `${this.host}/delete/${id}`;
    return this.http.delete(url)
  }
}
